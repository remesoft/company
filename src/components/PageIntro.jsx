import React from "react";

export default function PageIntro({ title, description }) {
  return (
    <section className="header-gradient">
      <div className="w-full bg-[url(/src/assets/pattern-03.svg)] bg-center">
        <section className="pt-32 lg:pt-40">
          <div className="mx-auto flex max-w-[900px] overflow-hidden px-4 pb-10 lg:flex-row xl:px-0">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-white">{title}</h1>
              <p className="mt-3 text-white">{description}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
