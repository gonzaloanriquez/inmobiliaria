const propiedades_alquiler = [
    {
      nombre: "Arriendo 1",
      src: "https://media.admagazine.com/photos/6317bd95d75f2fd76bd148aa/master/w_1600%2Cc_limit/APR%2520-%2520Nooor%2520-%2520Appartement%252045m2%2520rue%2520de%2520Grenelle%2520-%2520cre%25CC%2581dit%2520Nicolas%2520MatheusG19_2044.jpg",
      descripcion: "Arriendo dpto 1",
      ubicacion: "location rent 1",
      habitaciones: 1,
      wc: 1,
      costo: 80000,
      smoke: true,
      pets: false,
    },
    {
      nombre: "Arriendo 2",
      src: "https://http2.mlstatic.com/D_NQ_NP_902045-MLC75378244273_032024-O.webp",
      descripcion: "Arriendo dpto 2",
      ubicacion: "location rent 2",
      habitaciones: 2,
      wc: 1,
      costo: 90000,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Arriendo 3",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-nkFIQ2NSlyKE2y89-vTjue1t0a9ZrCgOi_uMKoerg&s",
      descripcion: "Arriendo dpto 3",
      ubicacion: "location rent 3",
      habitaciones: 2,
      wc: 2,
      costo: 300000,
      smoke: true,
      pets: false,
    },
    {
      nombre: "Arriendo 4",
      src: "https://media.licdn.com/dms/image/C4E12AQHGl8RYxIzIgg/article-cover_image-shrink_600_2000/0/1573390686782?e=2147483647&v=beta&t=1xLhbpn38bRt1HOHIZkfGZwTzV07CLVcz1eb4ik8kV0",
      descripcion: "Arriendo dpto 4",
      ubicacion: "location rent 4",
      habitaciones: 2,
      wc: 1,
      costo: 500000,
      smoke: false,
      pets: true,
    },
  ];

const PropAlquiler = () => {
    const elemento = document.getElementById ("propiedadesAlquiler");

    propiedades_alquiler.forEach((propiedad) =>{
        const card = document.createElement ("div");
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `<div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento" />
        <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="${propiedad.smoke ? "text-success" : "text-danger"}"><i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"} "></i> ${propiedad.smoke ? "Está permitido fumar" : "No esta permitido fumar"}</p>
                <p class="${propiedad.pets ? "text-success" : "text-danger"}"><i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"} "></i> ${propiedad.pets ? "Mascotas Permitidas" : "No se permite mascotas"}</p>
        </div>
    </div>`;
        elemento.appendChild(card)
    });
};

PropAlquiler();