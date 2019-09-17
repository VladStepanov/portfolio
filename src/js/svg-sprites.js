function requireAll(r) {
  r.keys().forEach(r);
}
// console
requireAll(require.context('@/assets/svg/', true, /\.svg$/));
