import React from "react";

function Shimmer() {
  return (
    <>
      <div class="card">
        <div class="card__shimmer">
          <div class="shimmer" />
        </div>
        <div class="card__header">
          <div class="header__avatar" />
          <div class="header__title" />
        </div>
        <div class="card__content">
          <div class="description description--md" />
          <div class="description description--sm" />
          <div class="description description--lg" />
        </div>
      </div>
    </>
  );
}

export default Shimmer;
