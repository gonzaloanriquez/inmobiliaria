const propiedades_venta = [
    {
      nombre: "Venta 1",
      src: "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2022-12/images/1045991255.jpg?VersionId=AZNxwA49XheemmY1W3SBo0_hEW259g8C&itok=9EZXP7sP",
      descripcion: "Gran propiedad 1",
      ubicacion: "Calle 1 al lado de 2",
      habitaciones: 3,
      wc: 2,
      costo: 2200500,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Venta 2",
      src: "https://chilepropiedades.cl/imagenes/publicacion/1/731cc128a9984080938128f3242b889d.jpeg",
      descripcion: "Gran propiedad 2",
      ubicacion: "Calle 1 al lado de 3",
      habitaciones: 2,
      wc: 1,
      costo: 3000000,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Venta 3",
      src: "https://media.istockphoto.com/id/147205650/photo/modern-house-with-swimming-pool.jpg?s=612x612&w=is&k=20&c=LAkkMZLr_XUEnzGpnHJCH2t5MYUDxn54OMqsHFqDUHI=",
      descripcion: "Gran propiedad 4",
      ubicacion: "Calle 1 al lado de 4",
      habitaciones: 2,
      wc: 2,
      costo: 5500000,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Venta 4",
      src: "https://media.gettyimages.com/id/185254919/es/foto/casa-junto-a-la-playa-con-cielo-azul.jpg?s=612x612&w=gi&k=20&c=VeQ28rCTFVdAMyso0BxFJt80bTUB8SGFtz-GGowQmjo=",
      descripcion: "Gran propiedad 8",
      ubicacion: "Calle 1 al lado de 5",
      habitaciones: 6,
      wc: 1,
      costo: 1500000,
      smoke: true,
      pets: false,
    },
  ];

const PropVenta = () => {
    const elemento = document.getElementById ("propiedadesVenta");

    propiedades_venta.forEach((propiedad) =>{
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

PropVenta();
