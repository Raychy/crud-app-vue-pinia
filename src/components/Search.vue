<template>
    <!-- start search block -->
<div class="search-overlay" data-toggle="search-close"></div>
<div class="search-block overflow-auto bg-body">
  <div data-toggle="search-close">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </div>
  
  <div class="is-hidden">
    <input type="text" id="js-search-input" placeholder="Type to search blog.." aria-label="search-query">
  </div>
  
  <div class="mt-4 pt-2 is-hidden popular-topics">
    <div class="post-meta">
      <div class="section-title mb-3">
        <p class="title h4 mb-0">Popular topics</p>
      </div>
      <ul class="taxonomy-lists list-inline">
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Lifestyle</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Motivation</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">AI</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Art</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Business</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Culture</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Earth</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Fitness</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Futurism</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Health</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Innovation</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Job</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Modern Art</a>
        </li>
        <li class="list-inline-item me-2 mt-2">
          <a class="bg-white" href="tag-single.html">Nature</a>
        </li>
        <li class="list-inline-item mt-2">
          <a class="border-0 pe-0 d-inline-flex align-items-center" href="tags.html"> All Topice <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline points="9 6 15 12 9 18"></polyline>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="mt-4 pt-2 is-hidden recent-posts">
    <div class="post-meta">
      <div class="section-title mb-3 pb-1">
        <p class="title h4 mb-0">Recent Posts</p>
      </div>
      <div class="row gy-4">
        <div class="col-md-6">
          <article class="row gx-3 align-items-start position-relative">
            <div class="col-auto">
              <img loading="lazy" class="img-fluid" src="assets/images/blog/07.webp" alt="What Do You Do When You Know You’re Not Fine?" width="75" height="75">
            </div>
            <div class="col">
              <span class="d-block lh-1 mb-2 zIndexed line-clamp clamp-2">
                <a class="small lh-1 text-muted text-link" href="category-single.html">Health</a>
              </span>
              <a class="fs-lg lh-base text-dark text-link stretched-link" href="blog-single.html">What Do You Do When You Know You’re Not Fine?</a>
            </div>
          </article>
        </div>
        <div class="col-md-6">
          <article class="row gx-3 align-items-start position-relative">
            <div class="col-auto">
              <img loading="lazy" class="img-fluid" src="assets/images/blog/08.webp" alt="The nine-to-five Is Dead. Here’s What to Replace It With" width="75" height="75">
            </div>
            <div class="col">
              <span class="d-block lh-1 mb-2 zIndexed line-clamp clamp-2">
                <a class="small lh-1 text-muted text-link" href="category-single.html">Culture</a>
              </span>
              <a class="fs-lg lh-base text-dark text-link stretched-link" href="blog-single.html">The nine-to-five Is Dead. Here’s What to Replace It With</a>
            </div>
          </article>
        </div>
        <div class="col-md-6">
          <article class="row gx-3 align-items-start position-relative">
            <div class="col-auto">
              <img loading="lazy" class="img-fluid" src="assets/images/blog/02.webp" alt="Why the security engineers loves working in fosec" width="75" height="75">
            </div>
            <div class="col">
              <span class="d-block lh-1 mb-2 zIndexed line-clamp clamp-2">
                <a class="small lh-1 text-muted text-link" href="category-single.html">Tech</a>
              </span>
              <a class="fs-lg lh-base text-dark text-link stretched-link" href="blog-single.html">Why the security engineers loves working in fosec</a>
            </div>
          </article>
        </div>
        <div class="col-md-6">
          <article class="row gx-3 align-items-start position-relative">
            <div class="col-auto">
              <img loading="lazy" class="img-fluid" src="assets/images/blog/06.webp" alt="There Are Zero Bridges Across The Amazon. Here Is Why" width="75" height="75">
            </div>
            <div class="col">
              <span class="d-block lh-1 mb-2 zIndexed line-clamp clamp-2">
                <a class="small lh-1 text-muted text-link" href="category-single.html">Geography</a>
              </span>
              <a class="fs-lg lh-base text-dark text-link stretched-link" href="blog-single.html">There Are Zero Bridges Across The Amazon. Here Is Why</a>
            </div>
          </article>
        </div>
        <div class="col-md-6">
          <article class="row gx-3 align-items-start position-relative">
            <div class="col-auto">
              <img loading="lazy" class="img-fluid" src="assets/images/blog/04.webp" alt="Msoft&#39;s smart fabric that can detect objects and gestures" width="75" height="75">
            </div>
            <div class="col">
              <span class="d-block lh-1 mb-2 zIndexed line-clamp clamp-2">
                <a class="small lh-1 text-muted text-link" href="category-single.html">Tech</a>
              </span>
              <a class="fs-lg lh-base text-dark text-link stretched-link" href="blog-single.html">Msoft's smart fabric that can detect objects and gestures</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- end search block -->

</template>