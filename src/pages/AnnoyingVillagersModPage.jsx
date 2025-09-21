import React, { useMemo, useState } from "react";
import "../styles/modpage.css";
import ModPageHeader from "../components/ModPageHeader.jsx";
import Sidebar from "../components/Sidebar";
import ItemCard from "../components/ItemCard.jsx";
import RightContents from "../components/RightContents.jsx";

const DATA = [
    {
        id: "bosses",
        name: "Bosses",
        items: [
            {
                id: "swordsman_herobrine",
                name: "Swordsman Herobrine",
                img: "https://static.wikia.nocookie.net/annoying-villagers/images/b/bc/Swordsman_Herobrine_AV53.png/revision/latest?cb=20210320071938",
                description:
                    "After randomly 3-6 successful hit, his blade will turns into Second Form, in the Second Form, after 3 successful hit, the sword will release SnakeBlade hit. Drop 3 Demoniac Voltage Reaver Fragment, 1 Demoniac Voltage Reaver Blade and a Demoniac Voltage Reaver Hilt on death.",
                youtubeId: "UnV01Vsdk1Y"
            }
        ],
    }
];

export default function AnnoyingVillagersModPage() {
    const [activeCat, setActiveCat] = useState(DATA[0].id);
    const [query, setQuery] = useState("");

    const categories = DATA;
    const current = useMemo(
        () => categories.find((c) => c.id === activeCat) || categories[0],
        [activeCat, categories]
    );

    const items = useMemo(() => {
        if (!query) return current.items;
        const q = query.toLowerCase();
        return current.items.filter((it) =>
            [it.name, it.subtitle, it.description, ...(it.tags || [])]
                .filter(Boolean)
                .some((s) => String(s).toLowerCase().includes(q))
        );
    }, [current, query]);

    const jumpTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="page">
            <ModPageHeader title={"Annoying Villagers"} value={query} onChange={setQuery} />

            <main className="layout">
                <Sidebar categories={categories} activeId={activeCat} onPick={setActiveCat} />

                <section className="content">
                    <h2 className="content__title">{current.name}</h2>
                    <div className="content__list">
                        {items.map((it) => (
                            <ItemCard
                                key={it.id}
                                item={it}
                                variant={current.id === "bosses" ? "boss" : "default"}
                            />
                        ))}
                    </div>
                </section>

                <RightContents items={current.items} onJump={jumpTo} />
            </main>
        </div>
    );
}
