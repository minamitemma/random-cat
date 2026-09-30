"use client";

import Image from "next/image";
import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

type CatImageProps = {
    url: string;
};

export function CatImage({ url }: CatImageProps){
    const [imageUrl, setImageUrl] = useState(url);

    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    };
    return (
        <div className={styles.page}>
            <button onClick={refreshImage} className={styles.button}>
                他のにゃんこも見る
            </button>
            <div className={styles.frame}>
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt="猫の写真"
                        fill
                        sizes="(max-width: 432px) calc(100vw - 32px), 400px"
                        className={styles.img}
                    />
                )}
            </div>
        </div>
    );
}
