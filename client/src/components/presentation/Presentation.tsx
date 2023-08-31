import React from "react";
import Image from "next/image"
import profileImage from "../../../public/assets/profile-picture.jpg"

export function Presentation() {
  return (
    <>
    
    <div className='flex itens-center align-middle justify-center mt-40'>
    <Image src={profileImage} className='object-cover w-[20rem] h-[20rem] rounded-full mr-4' alt='Pedro-Macedo-Profile-Picture'/>
    <div className="flex flex-col">
      <h1 className="ml-10 text-4xl font-bold text-white">
        Pedro Macedo de F. O. de Souza
      </h1>
      <p className="w-[40rem]">Profissional de tecnologia apaixonado por desenvolvimento de sistemas, com experiência como Técnico de Segurança da Informação na Oi. Busco aprimorar minhas habilidades full-stack, com enfoque em segurança da informação. Cursando Análise e Desenvolvimento de Sistemas na Faculdade Descomplicar e complementando meus conhecimentos com cursos na plataforma Alura. Certificado em inglês EF Test Certified Upper Intermediate, possibilitando atuação em projetos internacionais. Aprendiz rápido, proativo e colaborativo, ansioso para contribuir no avanço do desenvolvimento de sistemas.</p>
    </div>
  </div>
    </>
  )
}