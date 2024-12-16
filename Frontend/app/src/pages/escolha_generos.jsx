import React from "react";
import "../styles/escolha_generos.css";

import ALVC from "../images/ALVC.png";
import ALGORITMOS from "../images/algoritmos.png";
import ACSO from "../images/ACSO.jpg";
import CALCULO from "../images/calculo.png";
import ARTEFATOS from "../images/artefatos.png";
import SOFTWARE from "../images/software.png";
import ESTATISTICA from "../images/estatistica.png";
import ESTRUTURAS from "../images/datastructures.webp";
import PROGRAMACAO from "../images/programacao.jpg";
import LOGICA from "../images/logica.png";
import MATEMATICA from "../images/matematica.png";
import SISTEMAS from "../images/sistemas.png";

const materias = [
  {
    nome: "Álgebra Vetorial e Linear",
    imgSrc: ALVC,
    link: "https://drive.google.com/drive/folders/1Q9-I4yvxDMQBY0cG4meZ-9Hm4hzfLrRY?usp=sharing",
  },
  {
    nome: "Algoritmos",
    imgSrc: ALGORITMOS,
    link: "https://drive.google.com/drive/folders/1I4g15DbFoJeU9cXFZ2cjEdyZynuL5ThI?usp=sharing",
  },
  {
    nome: "Arquitetura de Computadores e SO",
    imgSrc: ACSO,
    link: "https://drive.google.com/drive/folders/1MhlCHWwm78NrZ0qZh4sM51ZBwR6FkOuP?usp=sharing",
  },
  {
    nome: "Cálculo 1",
    imgSrc: CALCULO,
    link: "https://drive.google.com/drive/folders/1vbcxQfo2AkDcghoc1B548MKw8oIiRYJE?usp=sharing",
  },
  {
    nome: "Concepção de Artefatos Digitais",
    imgSrc: ARTEFATOS,
    link: "https://drive.google.com/drive/folders/1f8-xdUf9SXXUSygvlyyPHNmm5Hc63JB3?usp=sharing",
  },
  {
    nome: "Desenvolvimento de Software",
    imgSrc: SOFTWARE,
    link: "https://drive.google.com/drive/folders/1el2el41Bx-t-d1GE6_rdIQm11pM-5PcZ?usp=sharing",
  },
  {
    nome: "Estatística e Probabilidade para Computação",
    imgSrc: ESTATISTICA,
    link: "https://drive.google.com/drive/folders/1ro7v_xe2TAgYuZp7I2v1_7ElEANhlQLE?usp=sharing",
  },
  {
    nome: "Estruturas de Dados Orientadas a Objetos",
    imgSrc: ESTRUTURAS,
    link: "https://drive.google.com/drive/folders/1eZvxEr37f1st8KuZM3PQBIgztnZxV99L?usp=sharing",
  },
  {
    nome: "Introdução à Programação",
    imgSrc: PROGRAMACAO,
    link: "https://drive.google.com/drive/folders/1rnPPSdQotj6yA69VfPG0jrYL0RB-ut2m?usp=sharing",
  },
  {
    nome: "Lógica para Computação",
    imgSrc: LOGICA,
    link: "https://drive.google.com/drive/folders/1SxIF6EfWrBbv7ZQnOLMtYWwJZrpQzFR-?usp=sharing",
  },
  {
    nome: "Matemática Discreta",
    imgSrc: MATEMATICA,
    link: "https://drive.google.com/drive/folders/1D4zDChteg6VplBDB1NZoLVJ1s3xaeg54?usp=drive_link",
  },
  {
    nome: "Sistemas Digitais",
    imgSrc: SISTEMAS,
    link: "https://drive.google.com/drive/folders/14rdSgm20eOG0tt2PBQH4CYfcZQSzROd0?usp=sharing",
  },
];

const GenreSelection = () => {
  const handleRedirect = (link) => {
    window.location.href = link;
  };

  return (
    <div className="main_container">
      <header>
        <h1>Selecione a Cadeira</h1>
      </header>

      <div className="materias">
        {materias.map((materia, index) => (
          <div
            key={index}
            className="materia"
            onClick={() => handleRedirect(materia.link)}
            role="button"
            tabIndex="0"
          >
            <div id="box-cadeira">
              <img src={materia.imgSrc} alt={materia.nome} />
              <h2>{materia.nome}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSelection;
