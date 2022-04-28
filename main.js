const fecha_input = document.querySelector("#fecha");
const fecha_label = document.querySelector("#fecha-label");

const update_date = () => {
    const date = new Date(fecha_input.value || localStorage.getItem("fecha"));
    const now = new Date();
    const diff = date.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    if (days < 0) fecha_label.innerText = "Mejor que tengas listo todo";
    else fecha_label.innerText = `${days} dias ${hours}h ${minutes}m ${seconds}s`;
};

fecha_input.addEventListener("change", () => {
    localStorage.setItem("fecha", fecha_input.value);
    update_date();
});

setInterval(() => {
    if (fecha_input.value || localStorage.getItem("fecha")) update_date();
}, 1000);