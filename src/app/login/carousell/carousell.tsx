import Link from 'next/link';
import React from 'react';
import styles from './carousell.module.css';
import Image from 'next/image';


const carousell = [
    {
        id          : 1,
        title       : 'Maecenas mattis egestas',
        description : 'Erdum et melesuada fames ac ante ipsum primis in faucibus unpendisse porta.',
        image       : '/assets/icon-01.svg'
    },
    // {
    //     id          : 2,
    //     title        : 'icon-02',
    //     description : 'Halo ini carousell 02',
    //     image       : '/assets/icon-02.svg'
    // },
];

const Carousel = () => {
    return (
        <div className={styles.carousell}>
            {/* Show the Image */}
            {carousell.map(carousel => (
                <div className={styles.icons} key={carousel.id}>
                    <Image
                    src={carousel.image}
                    alt={carousel.title}
                    width={300}
                    height={400}
                    />
                    {/* <img src={carousel.image} alt={carousel.title}/> */}
                </div>
            ))}
            {/* Show the description */}
            {carousell.map(carousel => (
                <div className={styles.description} key={carousel.id}>
                    <span className={styles.title_carousell}>{carousel.title}</span>
                    <text className={styles.subtitle_carousell}>{carousel.description}</text>
                </div>
            ))}
            <div> ® ® ® </div>
        </div>
    )
}

export default Carousel