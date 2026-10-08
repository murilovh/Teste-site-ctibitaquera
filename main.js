/* Lê window.CONTENT (content.js) e monta as seções dinâmicas. */
(function () {
  var C = window.CONTENT;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var brl = function (n) { return "R$ " + Number(n).toLocaleString("pt-BR", { minimumFractionDigits: 0 }); };
  var wa = function (msg) { return "https://wa.me/" + C.contato.whatsappNumero + "?text=" + encodeURIComponent(msg || C.contato.mensagemPadrao); };
  var ig = function (u) { return "https://www.instagram.com/" + u + "/"; };
  var WAICO = '<svg class="ico" aria-hidden="true"><use href="#i-wa"/></svg>';

  /* WhatsApp padrão */
  document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = wa(); });

  /* Hero */
  $("#hero-selo").textContent = C.hero.selo;
  $("#h-hero").textContent = C.hero.titulo;
  $("#hero-sub").textContent = C.hero.subtitulo;

  /* Modalidades */
  var bands = $("#bands");
  C.modalidades.forEach(function (m, i) {
    var row = el("div", "band-row" + (m.foto ? " band-row--foto" : ""));
    var tilt = [-1.5, 1.2, -1, 1.5, -1.2][i % 5];
    var b = el("div", "band band--" + m.cor);
    b.style.setProperty("--tilt", tilt + "deg");
    var title = (m.regular ? '<span class="band__reg">' + esc(m.regular) + "</span> " : "") + '<strong>' + esc(m.forte) + "</strong>";
    var html = '<h3 class="band__title">' + title + '</h3><p class="band__txt">' + esc(m.frase) + "</p>";
    if (m.mensagem) html += '<a class="band__link" href="' + wa(m.mensagem) + '" target="_blank" rel="noopener">' + esc(m.linkTexto) + " →</a>";
    else if (m.link) html += '<a class="band__link" href="' + m.link + '">' + esc(m.linkTexto) + " →</a>";
    b.innerHTML = html;
    if (m.foto) {
      var img = el("img", "band__foto");
      var kb = m.foto === "kettlebells";
      img.src = "assets/" + m.foto + (kb ? "-765" : "-1000") + ".webp";
      img.srcset = kb ? "assets/kettlebells-480.webp 480w, assets/kettlebells-765.webp 765w"
                      : "assets/treino-amplo-640.webp 640w, assets/treino-amplo-1000.webp 1000w, assets/treino-amplo-1360.webp 1360w";
      img.sizes = "(min-width: 720px) 300px, 70vw";
      img.alt = m.fotoAlt || ""; img.loading = "lazy";
      img.width = kb ? 765 : 1000; img.height = kb ? 1020 : 750;
      if (kb) img.classList.add("band__foto--kb");
      row.appendChild(img);
    }
    row.appendChild(b);
    bands.appendChild(row);
  });

  /* Planos */
  var P = C.planos, sel = 0;
  $("#planos-nota").textContent = P.nota;
  var seg = $("#seg"), cards = $("#plan-cards");
  function renderCards() {
    cards.innerHTML = "";
    P.lista.forEach(function (p) {
      var best = p.nome === P.destaque;
      var c = el("article", "pcard" + (best ? " pcard--best" : ""));
      c.innerHTML = (best ? '<span class="pcard__tag">Menor mensalidade</span>' : "") +
        '<h3>' + esc(p.nome) + '</h3><p class="pcard__price"><strong>' + brl(p.valores[sel]) + '</strong><span>/mês</span></p>' +
        '<p class="pcard__freq">' + esc(P.frequencias[sel]) + " por semana</p>";
      cards.appendChild(c);
    });
  }
  P.frequencias.forEach(function (f, i) {
    var b = el("button", "seg__btn", esc(f));
    b.type = "button"; b.setAttribute("role", "radio");
    b.setAttribute("aria-checked", i === 0 ? "true" : "false");
    b.setAttribute("aria-label", f + " por semana");
    b.tabIndex = i === 0 ? 0 : -1;
    b.addEventListener("click", function () { select(i); });
    b.addEventListener("keydown", function (e) {
      var n = P.frequencias.length, t = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") t = (sel + 1) % n;
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") t = (sel + n - 1) % n;
      if (t !== null) { e.preventDefault(); select(t); seg.children[t].focus(); }
    });
    seg.appendChild(b);
  });
  function select(i) {
    sel = i;
    Array.prototype.forEach.call(seg.children, function (b, k) { b.setAttribute("aria-checked", k === i ? "true" : "false"); b.tabIndex = k === i ? 0 : -1; });
    renderCards();
  }
  renderCards();
  var t = '<thead><tr><th scope="col"><span class="sr-only">Plano</span></th>' +
    P.frequencias.map(function (f) { return '<th scope="col">' + esc(f) + " <small>por semana</small></th>"; }).join("") + "</tr></thead><tbody>";
  P.lista.forEach(function (p) {
    t += '<tr class="' + (p.nome === P.destaque ? "is-best" : "") + '"><th scope="row">' + esc(p.nome) +
      (p.nome === P.destaque ? ' <em>Menor mensalidade</em>' : "") + "</th>" +
      p.valores.map(function (v) { return "<td>" + brl(v) + "</td>"; }).join("") + "</tr>";
  });
  $("#plan-table").innerHTML = t + "</tbody>";
  $("#plan-table").setAttribute("aria-label", "Valores mensais por plano e frequência semanal");

  var F = P.ferias;
  $("#ferias-titulo").textContent = F.titulo;
  $("#ferias-sub").textContent = F.subtitulo;
  $("#ferias-list").innerHTML = F.itens.map(function (i) { return "<li><span>" + esc(i.nome) + "</span><strong>" + brl(i.valor) + "</strong></li>"; }).join("");
  $("#ferias-wa").href = wa(F.mensagem);
  $("#ferias-wa").innerHTML = WAICO + "Quero o Plano Férias";

  /* Horários */
  var H = C.horarios;
  $("#hor-rotulo").textContent = H.rotulo;
  var all = [];
  H.dias.forEach(function (d) { d.horas.forEach(function (h) { if (all.indexOf(h) < 0) all.push(h); }); });
  all.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
  var g = "<thead><tr><th scope='col'><span class='sr-only'>Horário</span></th>" +
    H.dias.map(function (d) { return "<th scope='col'>" + esc(d.dia) + "</th>"; }).join("") + "</tr></thead><tbody>";
  all.forEach(function (h, r) {
    g += '<tr class="r' + (r % 2) + '"><th scope="row">' + esc(h.replace("h", ":00")) + "</th>";
    H.dias.forEach(function (d) {
      if (d.horas.indexOf(h) < 0) { g += '<td class="off"><span aria-hidden="true">–</span><span class="sr-only">sem treino</span></td>'; return; }
      var sp = d.especial && d.especial[h];
      g += '<td class="on' + (sp ? " special" : "") + '">' + (sp ? esc(sp) : "Treino") + "</td>";
    });
    g += "</tr>";
  });
  $("#grid").innerHTML = g + "</tbody>";

  /* Espaço */
  $("#espaco-frase").innerHTML = C.espaco.frases.map(function (f) { return "<span>" + esc(f) + "</span>"; }).join("");

  /* Professores */
  var profs = $("#profs");
  if (C.professoresFoto && C.professoresFoto.arquivo) {
    var fig = $("#profs-foto");
    fig.hidden = false;
    var im = fig.querySelector("img");
    im.src = "assets/" + C.professoresFoto.arquivo + "-640.webp";
    im.srcset = "assets/" + C.professoresFoto.arquivo + "-480.webp 480w, assets/" + C.professoresFoto.arquivo + "-640.webp 640w";
    im.alt = C.professoresFoto.alt;
  }
  C.professores.forEach(function (p) {
    var ini = p.nome.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
    var c = el("article", "prof");
    var pic = p.foto ? '<img src="' + esc(p.foto) + '" width="240" height="240" alt="Foto de ' + esc(p.nome) + '" loading="lazy">' : '<span aria-hidden="true">' + ini + "</span>";
    var hasDuo = C.professoresFoto && C.professoresFoto.arquivo;
    c.innerHTML = (p.foto || !hasDuo ? '<div class="prof__pic' + (p.foto ? "" : " prof__pic--ph") + '">' + pic + "</div>" : "") +
      "<h3>" + esc(p.nome) + '</h3><p class="prof__role">Professor(a)</p>' +
      (p.bio ? '<p class="prof__bio">' + esc(p.bio) + "</p>" : "") +
      '<a class="btn btn--ghost btn--sm" href="' + ig(p.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram de ' + esc(p.nome) + '">Instagram @' + esc(p.instagram) + "</a>";
    profs.appendChild(c);
  });

  /* Onde estamos + footer */
  var k = C.contato;
  $("#endereco").innerHTML = "<strong>" + esc(C.nomeCompleto) + "</strong><br>" + esc(k.endereco) + "<br>" + esc(k.bairroCidade) + "<br>CEP " + esc(k.cep) + '<br><span class="ref">' + esc(k.referencia) + "</span>";
  $("#btn-maps").href = k.mapsUrl;
  $("#btn-ig").href = k.instagramUrl;
  $("#footer-info").innerHTML = "<p>" + esc(k.endereco) + ", " + esc(k.bairroCidade) + " · CEP " + esc(k.cep) + "</p>" +
    '<p><a href="' + k.instagramUrl + '" target="_blank" rel="noopener">Instagram ' + esc(k.instagramUser) + "</a></p>" +
    '<p><a href="' + wa() + '" target="_blank" rel="noopener">WhatsApp ' + esc(k.whatsappExibicao) + "</a></p><p class='lema'>" + esc(C.lema) + "</p>";

  /* Menu mobile */
  var burger = $("#burger"), menu = $("#menu");
  function toggle(open) {
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }
  burger.addEventListener("click", function () { toggle(!menu.classList.contains("open")); });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") toggle(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });

  /* Entrada suave (só se o usuário não pediu menos movimento) */
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    document.querySelectorAll(".band, .pcard, .prof, .gal img").forEach(function (n) { n.classList.add("rv"); io.observe(n); });
  }
})();
