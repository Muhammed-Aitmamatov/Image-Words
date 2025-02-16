import { imagesData } from './images';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap стили
import "animate.css"; // Animate.css для анимаций

export default function App() {
  const [text, setText] = useState("");

  // Буквы и соответствующие изображения
  const letterImages = {
    a: imagesData.a,
    b: imagesData.b,
    c: imagesData.c,
    d: imagesData.d,
    e: imagesData.e,
    f: imagesData.f,
    g: imagesData.g,
    h: imagesData.h,
    i: imagesData.i,
    j: imagesData.j,
    k: imagesData.k,
    l: imagesData.l,
    m: imagesData.m,
    n: imagesData.n,
    o: imagesData.o,
    p: imagesData.p,
    q: imagesData.q,
    r: imagesData.r,
    s: imagesData.s,
    t: imagesData.t,
    u: imagesData.u,
    v: imagesData.v,
    w: imagesData.w,
    x: imagesData.x,
    y: imagesData.y,
    z: imagesData.z,
  };

  // Формируем картинки из текста
  const images = text
    .toLowerCase()
    .split("")
    .map((letter, index) =>
      letterImages[letter] ? (
        <img
          key={index}
          src={letterImages[letter]}
          alt={letter}
          className="rounded shadow-lg img-fluid animate__animated animate__zoomIn"
          style={{
            width: "50px",
            height: "50px",
            transition: "0.3s",
          }}
        />
      ) : (
        <span
          key={index}
          className="mx-2 fs-2 fw-bold text-primary animate__animated animate__fadeIn"
          style={{ transition: "0.3s" }}
        >
          {letter}
        </span>
      )
    );

  return (
    <div
      className="container text-center mt-5 p-4 rounded shadow-lg"
      style={{
        background: "linear-gradient(135deg, #ff9a9e 10%, #fad0c4 100%)",
        color: "white",
        maxWidth: "800px",
      }}
    >
      <h1 className="animate__animated animate__fadeInDown display-4 fw-bold mb-4">
        ✨ Text to Images ✨
      </h1>

      <input
        type="text"
        placeholder="Type a word..."
        className="form-control mx-auto shadow-sm animate__animated animate__fadeIn"
        style={{
          padding: "15px",
          fontSize: "18px",
          borderRadius: "30px",
          textAlign: "center",
          maxWidth: "90%", // адаптация для мобильных
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div
        className="mt-4 d-flex flex-wrap justify-content-center gap-2"
        style={{
          maxWidth: "100%",
        }}
      >
        {images}
      </div>

      <p className="mt-4 animate__animated animate__fadeInUp fs-5">
        ✍️ Write a word and see magic happen! ✨
      </p>
    </div>
  );
}
