import React, { useEffect, useMemo, useState } from "react";
import "../styles/modpage.css";
import ModPageHeader from "../components/ModPageHeader.jsx";
import Sidebar from "../components/Sidebar";
import ItemCard from "../components/ItemCard.jsx";
import RightContents from "../components/RightContents.jsx";
import { api, endpoints } from "../configs/Api.jsx";

function AnnoyingVillagersModPage() {
    const [activeCat, setActiveCat] = useState(null);
    const [query, setQuery] = useState("");
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);

    const [loadingCats, setLoadingCats] = useState(false);
    const [loadingItems, setLoadingItems] = useState(false);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                setLoadingCats(true);
                let res = await api().get(endpoints['categories'])
                const cats = Array.isArray(res.data?.result) ? res.data.result : res.data || [];
                setCategories(cats)
                setActiveCat((prev) => prev ?? (cats[0]?.id ?? null));
            } catch (ex) {
                setErr(ex?.response?.data?.message || ex.message || "Failed to load categories");
            } finally {
                setLoadingCats(false)
            }
        }
        loadCategories()
    }, [])

    useEffect(() => {
        const loadBosses = async () => {
            try {
                setLoadingItems(true)
                let res = await api().get(endpoints['bosses'] + `?categoryId=${activeCat}`)
                setItems(Array.isArray(res.data?.result) ? res.data.result : res.data || [])
            } catch (ex) {
                setErr(ex?.response?.data?.message || ex.message || "Failed to load items");
            } finally {
                setLoadingItems(false);
            }
        }
        if (activeCat != null) {
            loadBosses()
        }
    }, [activeCat])

    const current = useMemo(
        () => categories.find((c) => String(c.id) === String(activeCat)) || null,
        [categories, activeCat]
    );

    const jumpTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const visibleItems = useMemo(() => {
        if (!query) return items;
        const q = query.toLowerCase();
        return items.filter((it) =>
        [it.name, it.subtitle, it.description, ...(it.tags || [])]
            .filter(Boolean)
            .some((s) => String(s).toLowerCase().includes(q))
        );
    }, [items, query]);

    return (
    <div className="page">
      <ModPageHeader title="Annoying Villagers Wiki" value={query} onChange={setQuery} />

      <main className="layout">
        <Sidebar
          categories={categories.map((c) => ({ ...c, items: c.id === activeCat ? items : [] }))}
          activeId={activeCat}
          onPick={setActiveCat}
        />

        <section className="content">
          <h2 className="content__title">
            {current?.name ?? (loadingCats ? "Loading…" : "—")}
          </h2>

          <div className="content__list">
            {err && <div className="empty">Error: {err}</div>}

            {!err && (loadingCats || loadingItems) && (
              <div className="empty">Loading…</div>
            )}

            {!err && !loadingCats && !loadingItems && visibleItems.length === 0 && (
              <div className="empty">No entries.</div>
            )}

            {!err && !loadingItems && visibleItems.map((it) => (
              <ItemCard
                key={it.id}
                item={{
                  ...it,
                  img: it.imageUrl || it.img || "https://placehold.co/600x600/png?text=image",
                }}
                variant={(current?.name || "").toLowerCase() === "bosses" ? "boss" : "default"}
              />
            ))}
          </div>
        </section>

        <RightContents items={visibleItems} onJump={jumpTo} />
      </main>
    </div>
  );
}

export default AnnoyingVillagersModPage