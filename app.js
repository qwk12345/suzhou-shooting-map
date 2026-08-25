const homePoint = { name: "菁汇公寓", lat: 31.2718283, lon: 120.7696644 };

const places = [
  ["拙政园", "古典园林", "园林卡覆盖", 80, 6, "春 / 夏 / 秋"],
  ["留园", "古典园林", "园林卡覆盖", 55, 6, "夏 / 秋"],
  ["网师园", "古典园林", "园林卡覆盖", 40, 6, "春 / 夏夜 / 秋"],
  ["耦园", "古典园林", "园林卡覆盖", 25, 6, "春 / 夏 / 秋"],
  ["沧浪亭", "古典园林", "园林卡覆盖", 20, 6, "春 / 冬 / 雨天"],
  ["狮子林", "古典园林", "园林卡覆盖", 40, 6, "秋 / 冬 / 雨后"],
  ["艺圃", "古典园林", "园林卡覆盖", 10, 6, "春 / 冬"],
  ["环秀山庄", "古典园林", "园林卡覆盖", 15, 6, "冬 / 阴天 / 雨后"],
  ["怡园", "古典园林", "园林卡覆盖", 15, 6, "春 / 秋"],
  ["虎丘山风景区", "山水名胜", "园林卡覆盖", 70, 7, "秋 / 春 / 冬"],
  ["寒山寺", "古刹人文", "园林卡不覆盖", 20, 7, "春 / 秋 / 冬"],
  ["山塘街", "历史街区", "免费", 0, 6, "四季 / 夏夜"],
  ["平江路历史街区", "历史街区", "免费", 0, 6, "四季"],
  ["苏州博物馆", "博物馆建筑", "免费", 0, 6, "四季 / 阴天"],
  ["金鸡湖景区", "城市湖景", "免费", 0, 4, "春 / 夏 / 秋"],
  ["东方之门", "城市地标", "免费", 0, 4, "四季"],
  ["太湖国家湿地公园", "湖区湿地", "园林卡不覆盖", 60, 13, "春 / 夏 / 秋"],
  ["木渎古镇", "水乡古镇", "免费", 0, 8, "春 / 秋 / 冬"],
  ["天平山景区", "山林景区", "园林卡覆盖", 30, 8, "秋季首选 / 春"],
  ["同里古镇", "水乡古镇", "园林卡不覆盖", 100, 10, "春 / 秋 / 冬"],
  ["周庄古镇", "水乡古镇", "园林卡不覆盖", 100, 20, "春 / 秋 / 冬"],
];

const routeData = [
  { id: "spring", type: "园林线", season: "春", title: "春线", order: ["拙政园", "沧浪亭", "艺圃", "耦园", "网师园"], target: "新绿、花木、水气，完成全年第一轮主素材", transport: 16, days: "1次", color: "spring", note: "早场地铁到古城，园林之间步行串联。" },
  { id: "summer", type: "园林线", season: "夏", title: "夏线", order: ["拙政园", "留园", "耦园", "网师园"], target: "浓绿、荷花、阴影，避开正午强光", transport: 16, days: "1次", color: "summer", note: "6:30-9:00 或 17:00 后，减少暴晒。" },
  { id: "autumn", type: "园林线", season: "秋", title: "秋线", order: ["留园", "网师园", "耦园", "环秀山庄"], target: "桂花、秋色、空气通透，补完整路线", transport: 16, days: "1次", color: "autumn", note: "把桂花、树影和石景放在同一组素材里。" },
  { id: "winter", type: "园林线", season: "冬", title: "冬线", order: ["环秀山庄", "狮子林", "沧浪亭", "艺圃"], target: "结构、留白、少人空景，做收束素材", transport: 16, days: "1次", color: "winter", note: "阴天、雨后或低饱和天光更适合。" },
  { id: "human", type: "景区线", season: "全年", title: "古城人文线", order: ["苏州博物馆", "平江路历史街区", "山塘街", "寒山寺", "虎丘山风景区"], target: "古建、街巷、钟声、生活感", transport: 24, days: "建议2次", color: "jade", note: "建议拆成两次：博物馆+平江路；山塘+寒山寺+虎丘。" },
  { id: "city", type: "景区线", season: "全年", title: "城市地标线", order: ["金鸡湖景区", "东方之门"], target: "日落、蓝调时刻、天际线、夜景", transport: 10, days: "1次", color: "blue", note: "傍晚出发，湖边步行至东方之门。" },
  { id: "taihu", type: "景区线", season: "全年", title: "太湖山林线", order: ["太湖国家湿地公园", "天平山景区", "木渎古镇"], target: "湖岸、山林、远景、季节色彩", transport: 50, days: "建议2次", color: "teal", note: "湿地单独一日；天平山+木渎另一次。" },
  { id: "water", type: "景区线", season: "全年", title: "水乡古镇线", order: ["木渎古镇", "同里古镇", "周庄古镇"], target: "水巷、桥、船、夜色、慢生活", transport: 76, days: "建议2天", color: "amber", note: "木渎、同里、周庄分段执行，远端需要接驳。" },
];

const monthData = [
  ["1月", "冬景 / 留白 / 结构", "环秀山庄 > 狮子林 > 沧浪亭", "冬", "拍假山、门洞、廊影、池面和少人空景"],
  ["2月", "早春前奏 / 残冬", "网师园 > 沧浪亭 > 艺圃", "冬", "拍枝条、门头、灰墙、低饱和画面"],
  ["3月", "新绿 / 柳色 / 水气", "拙政园 > 沧浪亭 > 艺圃", "春", "拍嫩叶、倒影、廊下的明暗变化"],
  ["4月", "春花高峰", "拙政园 > 留园 > 耦园", "春", "拍花树、窗景、池边花影和人物尺度"],
  ["5月", "浓绿 / 水面稳定", "拙政园 > 网师园 > 耦园", "春", "拍满绿、廊下阴影和较深的空间"],
  ["6月", "梅雨 / 荷叶初展", "留园 > 拙政园 > 网师园", "夏", "拍湿润感、石面、水气、深色层次"],
  ["7月", "荷花高峰 / 强光避拍", "拙政园 > 耦园 > 留园", "夏", "拍荷花、荷叶、镜面水和阴影"],
  ["8月", "高温 / 早晚光", "网师园 > 留园 > 狮子林", "夏", "拍阴影、窗棂、局部细节和通道"],
  ["9月", "桂花 / 初秋", "留园 > 网师园 > 环秀山庄", "秋", "拍桂花、风过树影和院落层次"],
  ["10月", "秋色 / 空气通透", "留园 > 拙政园 > 狮子林", "秋", "拍树色变化、池水、石与木的质感"],
  ["11月", "最佳色彩 / 低湿度", "留园 > 耦园 > 环秀山庄", "秋", "拍落叶、光斑和深色建筑"],
  ["12月", "冬景 / 雨雪 / 留白", "环秀山庄 > 狮子林 > 艺圃", "冬", "拍结构、空场、灰白天光和树枝线条"],
];

const storageKey = "suzhou-four-seasons-shooting-v1";
let state = loadState();
let deferredInstallPrompt = null;
let activeRouteFilter = "全部";

function loadState() {
  try {
    return { records: [], completedMonths: [], ...JSON.parse(localStorage.getItem(storageKey) || "{}") };
  } catch {
    return { records: [], completedMonths: [] };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function money(value) {
  return `¥${Number(value).toLocaleString("zh-CN")}`;
}

function todayISO() {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60000).toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return "未填写日期";
  return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "short", day: "numeric" }).format(new Date(`${value}T00:00:00`));
}

function currentSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return "春";
  if (month >= 6 && month <= 8) return "夏";
  if (month >= 9 && month <= 11) return "秋";
  return "冬";
}

function placeData(name) {
  const row = places.find((item) => item[0] === name);
  return row ? { name: row[0], type: row[1], status: row[2], ticket: row[3], transport: row[4], season: row[5] } : null;
}

function routeTicket(route) {
  return route.order.reduce((total, name) => {
    const item = placeData(name);
    return total + (item?.status === "园林卡不覆盖" ? item.ticket : 0);
  }, 0);
}

function mapsUrl(order) {
  const waypoints = order.map((name) => encodeURIComponent(`${name} 苏州`)).join("|");
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("菁汇公寓 苏州")}&destination=${encodeURIComponent(`${order.at(-1)} 苏州`)}&waypoints=${waypoints}`;
}

function setView(viewName) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.dataset.view === viewName));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.nav === viewName));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
  const completed = state.completedMonths.length;
  document.querySelector("#progress-label").textContent = `${completed} / 12 个月`;
  document.querySelector("#progress-bar").style.width = `${(completed / 12) * 100}%`;
  document.querySelector("#current-season").textContent = currentSeason();
  document.querySelector("#today-label").textContent = formatDate(todayISO());
  const season = currentSeason();
  const route = routeData.find((item) => item.season === season) || routeData[0];
  document.querySelector("#season-title").textContent = `${season}季拍什么`;
  document.querySelector("#featured-route").innerHTML = `
    <span class="route-type">${route.type} · ${route.days}</span>
    <h3>${route.title}</h3>
    <p>${route.target}。${route.note}</p>
    <div class="feature-meta"><span class="meta-pill">门票 ${money(routeTicket(route))}</span><span class="meta-pill">交通约 ${money(route.transport)}</span><span class="meta-pill">${route.order.length} 个点</span></div>`;
  const recent = [...state.records].sort((a, b) => b.createdAt - a.createdAt).slice(0, 3);
  document.querySelector("#recent-list").innerHTML = recent.length ? recent.map((record) => `
    <div class="recent-item"><span class="recent-icon">${record.kind === "视频" ? "▶" : "▧"}</span><div><strong>${record.place}</strong><small>${formatDate(record.date)} · ${record.kind} · ${record.weather}</small></div></div>`).join("") : `<div class="empty-state">还没有记录，下一次拍完就从这里开始。</div>`;
}

function renderRoutes() {
  const routes = activeRouteFilter === "全部" ? routeData : routeData.filter((route) => route.type === activeRouteFilter);
  document.querySelector("#route-list").innerHTML = routes.map((route) => `
    <article class="route-card">
      <div class="route-card-head"><div><span class="route-type">${route.type} · ${route.season}</span><h3>${route.title}</h3></div><span class="route-total">${money(routeTicket(route) + route.transport)}</span></div>
      <p class="route-description">${route.target}。${route.note}</p>
      <div class="route-stops"><span class="stop home-stop">H 菁汇公寓</span>${route.order.map((stop) => `<span class="stop">${stop}</span>`).join("")}</div>
      <div class="route-card-foot"><span>门票 <strong>${money(routeTicket(route))}</strong> · 交通 <strong>${money(route.transport)}</strong> · ${route.days}</span><a class="text-button" href="${mapsUrl(route.order)}" target="_blank" rel="noreferrer">导航 ↗</a></div>
    </article>`).join("");
}

function renderBudget() {
  const routeTicketTotal = routeData.reduce((sum, route) => sum + routeTicket(route), 0);
  const routeTransportTotal = routeData.reduce((sum, route) => sum + route.transport, 0);
  document.querySelector("#budget-summary").innerHTML = `
    <div class="summary-card"><span>门票合计</span><strong>${money(routeTicketTotal)}</strong></div>
    <div class="summary-card"><span>交通合计</span><strong>${money(routeTransportTotal)}</strong></div>
    <div class="summary-card accent"><span>线路总计</span><strong>${money(routeTicketTotal + routeTransportTotal)}</strong></div>`;
  drawBudgetList();
}

function drawBudgetList() {
  const search = document.querySelector("#budget-search").value.trim().toLowerCase();
  const filtered = places.filter((item) => item[0].toLowerCase().includes(search) || item[1].toLowerCase().includes(search));
  document.querySelector("#budget-list").innerHTML = filtered.map((item) => {
    const [name, type, status, ticket, transport, season] = item;
    const afterTicket = status === "园林卡不覆盖" ? ticket : 0;
    const total = afterTicket + transport * 2;
    return `<article class="budget-card"><div class="budget-card-top"><div><h3>${name}</h3><small>${type} · ${season}</small></div><span class="budget-value">${money(total)}</span></div><div class="budget-card-bottom"><div class="budget-details"><span class="status-tag ${status === "园林卡不覆盖" ? "paid" : ""}">${status}</span><span>门票 ${money(afterTicket)}</span><span>往返交通 ${money(transport * 2)}</span></div><small>单程约 ${money(transport)}</small></div></article>`;
  }).join("") || `<div class="empty-state">没有匹配的景点。</div>`;
}

function renderLog() {
  document.querySelector("#record-count").textContent = `${state.records.length} 条`;
  const search = document.querySelector("#log-search").value.trim().toLowerCase();
  const records = [...state.records].sort((a, b) => b.createdAt - a.createdAt).filter((record) => `${record.place} ${record.focus} ${record.weather}`.toLowerCase().includes(search));
  document.querySelector("#log-list").innerHTML = records.length ? records.map((record) => `
    <article class="log-card"><div class="log-card-head"><div><h3>${record.place}</h3><div class="log-card-meta"><span>${record.kind}</span><span>${record.weather}</span></div></div><time>${formatDate(record.date)}</time></div>${record.focus ? `<p>${escapeHtml(record.focus)}</p>` : ""}${record.files?.length ? `<div class="file-note">素材：${record.files.map(escapeHtml).join("、")}</div>` : ""}<div class="form-actions"><span></span><button class="text-button" data-delete-record="${record.id}" type="button">删除</button></div></article>`).join("") : `<div class="empty-state">还没有找到拍摄记录。</div>`;
}

function renderAnnual() {
  document.querySelector("#month-list").innerHTML = monthData.map((month, index) => {
    const done = state.completedMonths.includes(index);
    return `<article class="month-card ${done ? "done" : ""}"><div class="month-number season-${month[3]}">${month[0]}</div><div><h3>${month[1]}</h3><p>${month[2]}<br>${month[4]}</p></div><button type="button" title="标记${done ? "未完成" : "完成"}" aria-label="标记${done ? "未完成" : "完成"}" data-toggle-month="${index}">${done ? "✓" : "○"}</button></article>`;
  }).join("");
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function populatePlaceSelect() {
  document.querySelector("#record-place").innerHTML = places.map((item) => `<option value="${item[0]}">${item[0]}</option>`).join("");
}

function resetForm() {
  const form = document.querySelector("#record-form");
  form.reset();
  document.querySelector("#record-date").value = todayISO();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function exportRecords() {
  const header = ["日期", "地点", "内容", "天气", "拍摄重点", "素材文件名"];
  const rows = state.records.map((record) => [record.date, record.place, record.kind, record.weather, record.focus || "", (record.files || []).join("、")]);
  const csv = [header, ...rows].map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `苏州拍摄记录-${todayISO()}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("记录已导出");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  const go = event.target.closest("[data-go]");
  if (nav) setView(nav.dataset.nav);
  if (go) setView(go.dataset.go);
  const filter = event.target.closest("[data-route-filter]");
  if (filter) {
    activeRouteFilter = filter.dataset.routeFilter;
    document.querySelectorAll("[data-route-filter]").forEach((item) => item.classList.toggle("active", item === filter));
    renderRoutes();
  }
  const monthToggle = event.target.closest("[data-toggle-month]");
  if (monthToggle) {
    const index = Number(monthToggle.dataset.toggleMonth);
    state.completedMonths = state.completedMonths.includes(index) ? state.completedMonths.filter((item) => item !== index) : [...state.completedMonths, index];
    saveState();
    renderAnnual();
    renderHome();
    showToast("年度进度已更新");
  }
  const deleteButton = event.target.closest("[data-delete-record]");
  if (deleteButton) {
    state.records = state.records.filter((record) => record.id !== deleteButton.dataset.deleteRecord);
    saveState();
    renderLog();
    renderHome();
    showToast("记录已删除");
  }
});

document.querySelector("#record-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const files = [...document.querySelector("#record-files").files].map((file) => file.name);
  state.records.push({ id: crypto.randomUUID(), createdAt: Date.now(), date: form.get("date"), place: form.get("place"), kind: form.get("kind"), weather: form.get("weather"), focus: form.get("focus"), files });
  saveState();
  resetForm();
  renderLog();
  renderHome();
  showToast("拍摄记录已保存");
});

document.querySelector("#clear-form").addEventListener("click", resetForm);
document.querySelector("#export-button").addEventListener("click", exportRecords);
document.querySelector("#budget-search").addEventListener("input", drawBudgetList);
document.querySelector("#log-search").addEventListener("input", renderLog);
document.querySelector("#share-button").addEventListener("click", async () => {
  try {
    if (navigator.share) await navigator.share({ title: "苏州四季拍摄地图", text: "从菁汇公寓出发的苏州园林与名胜拍摄计划", url: window.location.href });
    else await navigator.clipboard.writeText(window.location.href);
    showToast("链接已准备好");
  } catch { showToast("分享已取消"); }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.querySelector("#install-button").hidden = false;
});
document.querySelector("#install-button").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.querySelector("#install-button").hidden = true;
});

document.querySelector("#record-date").value = todayISO();
populatePlaceSelect();
renderHome();
renderRoutes();
renderBudget();
renderLog();
renderAnnual();

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
