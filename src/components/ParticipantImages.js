/**
 * SPDX-License-Identifier: MIT
 *
 * SPDX-FileCopyrightText: 2021 Gaurav Mishra <mishra.gaurav@siemens.com>
 * SPDX-FileCopyrightText: 2021 Siemens AG
 */

import React from 'react';
import styles from './ParticipantImages.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageList = [
  {
    img: '/img/gsoc21participants.png',
    title: 'GSoC - 2021 participants',
  },
  {
    img: '/img/gsoc22participants1.png',
    title: 'GSoC - 2022 participants 1',
  },
  {
    img: '/img/gsoc22participants2.png',
    title: 'GSoC - 2022 participants 2',
  },
  {
    img: '/img/gsoc22participants3.png',
    title: 'GSoC - 2022 participants 3',
  },
  {
    img: '/img/gsoc23participants1.png',
    title: 'GSoC - 2023 participants 1',
  },
  {
    img: '/img/gsoc23participants2.png',
    title: 'GSoC - 2023 participants 2',
  },
  {
    img: '/img/gsoc23participants3.png',
    title: 'GSoC - 2023 participants 3',
  },
  {
    img: '/img/gsoc24participants1.png',
    title: 'GSoC - 2024 participants 1',
  },
  {
    img: '/img/gsoc24participants2.png',
    title: 'GSoC - 2024 participants 2',
  },
  {
    img: '/img/gsoc24participants3.png',
    title: 'GSoC - 2024 participants 3',
  },
  {
    img: '/img/gsoc24participants4.png',
    title: 'GSoC - 2024 participants 4',
  },
];

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

export default function ParticipantImages() {
  return (
    <section className={styles.imageCarousel}>
      <div>
        <p className={`hero__subtitle ${styles.subTitle}`}>
          Meet our participants (more photos to come soon)
        </p>
      </div>
      <div>
        <Carousel showArrows={true} ariaLabel='Images of participants'
          autoPlay={true} interval='6000' infiniteLoop={true}>
          {shuffleArray(ImageList).map((props, idx) => (
            <div key={idx}>
              <img src={useBaseUrl(props.img)} />
              <p className={styles.imageCarouselCaption}>{props.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
