import style from './assets/App.module.css'

import React from "react";
import {Switch, Route } from 'react-router-dom';

import { Footer } from "templates/Footer";
import { Aside } from "templates/Aside";
import { Header } from "templates/Header";
import { RightAside } from "./templates/RightAside";


export const App = () => (
  <div>
    <Header/>
    <main className={style.gridContainer}>
      <Aside />
      <div className={style.content}>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem dolorem ducimus earum facilis fugiat
          harum iste itaque modi, natus neque sequi voluptas voluptatum! Deleniti facilis illo mollitia saepe sunt.
        </div>
        <div>Amet at beatae dicta, ducimus eaque exercitationem facere id nam nemo nisi optio, perferendis quam quisquam
          repellat reprehenderit repudiandae soluta temporibus vitae voluptas voluptatibus! Dolore hic ipsam nisi
          officiis repellendus.
        </div>
        <div>Blanditiis commodi deserunt doloremque eligendi, enim est excepturi explicabo facere incidunt ipsum itaque
          magnam modi natus necessitatibus nostrum nulla numquam, obcaecati, officiis quae qui quibusdam quod similique
          ut. Quas, veniam.
        </div>
        <div>Animi, aperiam aut beatae culpa dolor ex fuga iure nam nobis placeat provident quae, quaerat sed, sint
          vitae! Debitis dolorem in nostrum quibusdam quisquam quod suscipit ullam voluptatum. Iure, obcaecati!
        </div>
        <div>Cum id odio perspiciatis porro repudiandae veritatis vero. Asperiores at dolorum numquam provident quaerat!
          Aliquam consequuntur, dolores, explicabo iure minus nulla officia perferendis, provident sed sequi sint soluta
          ut voluptatum.
        </div>
        <div>A corporis debitis distinctio illum laboriosam molestias quasi quibusdam, tenetur voluptatibus. Accusamus
          ad adipisci, assumenda eaque, facere harum ipsum laborum natus praesentium quod reiciendis rem sed similique
          suscipit tempore, vitae?
        </div>
        <div>Ab accusamus amet aperiam aspernatur, blanditiis consectetur consequuntur culpa cumque delectus deleniti
          dicta ducimus error explicabo facilis fuga fugiat ipsam iure iusto laborum maxime nemo obcaecati rem ullam
          velit voluptates!
        </div>
        <div>Ab aliquid assumenda dignissimos earum facilis nam natus, quo veritatis voluptatibus? Corporis deserunt
          doloremque esse quia voluptates! Aut beatae consectetur possimus ut! Ad deserunt facilis, nihil non odio
          recusandae repudiandae.
        </div>
        <div>Accusantium, aspernatur beatae commodi corporis cupiditate, dignissimos ea est exercitationem facere harum
          natus non numquam odio officiis quaerat repellat repellendus similique soluta ut voluptate. Blanditiis
          deserunt error nemo obcaecati quia?
        </div>
        <div>Aperiam perspiciatis quia voluptatum? Animi, architecto dicta dignissimos ea esse fugit in ipsam maxime nam
          pariatur placeat, ratione. Ducimus fuga iusto odit quo rem reprehenderit vero! Minus placeat sequi suscipit!
        </div>
        <div>Amet cumque omnis velit. Autem cumque dignissimos molestiae! Assumenda debitis deleniti harum inventore
          ipsum molestiae quos? Aperiam commodi, deleniti deserunt eligendi nam nesciunt nulla perferendis qui tenetur
          ut. Natus, obcaecati!
        </div>
        <div>At atque beatae commodi consectetur cum, deleniti doloribus ea eius eligendi enim exercitationem fugiat
          fugit impedit in iusto nobis, nulla odit placeat porro quod quos repellat saepe sed ullam unde!
        </div>
        <div>Ad alias cupiditate dicta exercitationem facilis ipsa, ipsum maiores minus nemo, nesciunt non nulla
          pariatur perferendis quibusdam repellat rerum vero vitae. Ad adipisci enim eveniet facilis libero nisi,
          tenetur veritatis.
        </div>
        <div>Accusamus ea eligendi iusto laudantium magnam necessitatibus, placeat repellat tempore. Beatae eum eveniet
          facere in incidunt, inventore maiores, nam nemo odit perspiciatis quae rem vel vero! Doloribus et odit
          officia?
        </div>
        <div>Adipisci dolorem ducimus enim hic labore sapiente voluptas. Accusamus pariatur unde vero voluptatem.
          Distinctio optio perspiciatis praesentium quas qui sint tenetur. A amet aspernatur cupiditate exercitationem
          nobis repellat similique soluta.
        </div>
        <div>Aliquid architecto debitis explicabo facere, harum, impedit laborum nulla optio quia, soluta temporibus
          voluptatem! Fugit iusto, perferendis. A debitis deserunt maiores porro velit! At ea eius molestiae
          perspiciatis quod veritatis.
        </div>
        <div>A debitis dolore expedita fugit inventore maxime non, reprehenderit. Consectetur culpa enim excepturi harum
          id recusandae vel voluptas. Aut cumque cupiditate eos est incidunt labore laudantium magni, quaerat quasi
          unde?
        </div>
        <div>Architecto asperiores corporis cum dignissimos doloremque eius impedit laudantium magnam, modi mollitia nam
          necessitatibus neque perspiciatis quia quo repellat saepe sunt. Deserunt fuga, illum laudantium numquam
          similique temporibus unde ut.
        </div>
        <div>Accusamus aliquam amet aspernatur cumque debitis doloremque doloribus ea earum eos et ex exercitationem
          expedita illo laborum neque nisi nulla porro, provident quidem sapiente soluta tenetur totam ut veniam
          voluptatibus!
        </div>
        <div>Beatae, cum delectus enim, fugiat inventore laborum magni nisi pariatur sequi tempora, tenetur unde vel
          vitae. Dolore, ea enim explicabo hic laudantium numquam officia perspiciatis reprehenderit rerum tempore vero
          voluptates.
        </div>
      </div>
      <RightAside />
    </main>
    <Footer/>
  </div>
);