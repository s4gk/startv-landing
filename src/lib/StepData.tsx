import { IconCalendar, IconConection, IconFile, IconFlashlight } from "@/components";
import { IStep } from "../types";

export const Steps: IStep[] = [
  {
    title: "Seleccionar Plan",
    description:
      "Elige el plan de Internet y TV que mejor se adapte a tu estilo de vida: trabajar, estudiar, jugar o ver tus series favoritas, con la velocidad y cobertura ideal para tu hogar.",
    icon: <IconFile />,
  },
  {
    title: "Agenda tu instalación",
    description:
      "Tras elegir el plan, coordinamos la instalación en la fecha y hora que más te convenga, sin esperas ni complicaciones.",
    icon: <IconCalendar />,
  },
  {
    title: "Instalación rápida y segura",
    description:
      "Nuestro equipo técnico instala y configura todo de forma profesional, asegurando un servicio perfecto desde el primer día.",
    icon: <IconFlashlight />,
  },
  {
    title: "Disfruta tu conexión",
    description:
      "Con el servicio activo, navega a máxima velocidad, trabaja, estudia o disfruta tus contenidos favoritos en HD sin interrupciones.",
    icon: <IconConection />,
  },
];
