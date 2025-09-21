import React from "react";

export default function ItemCard({ item, variant = "default" }) {
    if (variant === "boss") {
        return (
            <section id={item.id} className="card card--boss">
                <div className="boss__image">
                    <img
                        src={item.img || "https://placehold.co/600x600/png?text=image"}
                        alt={item.name}
                        onError={(e) => (e.currentTarget.src = "https://placehold.co/600x600/png?text=image")}
                    />
                </div>

                <h3 className="boss__name">{item.name}</h3>

                <div className="boss__info">
                    <p>{item.description || "No information provided."}</p>
                </div>

                {(item.youtubeId || item.videoUrl) && (
                    <div className="boss__video">
                        <div className="embed">
                            <iframe
                                src={
                                    item.youtubeId
                                        ? `https://www.youtube.com/embed/${item.youtubeId}`
                                        : item.videoUrl.replace("watch?v=", "embed/")
                                }
                                title={item.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}
            </section>
        );
    }

    return (
        <section id={item.id} className="card">
            <img
                className="card__thumb"
                src={item.img || "https://placehold.co/96x96/png?text=Img"}
                alt={item.name}
                onError={(e) => (e.currentTarget.src = "https://placehold.co/96x96/png?text=Img")}
            />
            <div className="card__main">
                <div className="card__row">
                    <h3 className="card__title">{item.name}</h3>
                    <div className="card__tags">
                        {item.tags?.map((t) => (
                            <span key={t} className="tag">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                {item.subtitle && <p className="card__subtitle">{item.subtitle}</p>}
                {item.description && <p className="card__desc">{item.description}</p>}
            </div>
            <img
                className="card__preview"
                src="https://placehold.co/144x96/png?text=Preview"
                alt="Preview"
                onError={(e) => (e.currentTarget.src = "https://placehold.co/144x96/png?text=Preview")}
            />
        </section>
    );
}
