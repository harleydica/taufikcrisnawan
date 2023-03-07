type Albums = Array<{ title: string; src: string }>

const IMG_URL = 'https://ik.imagekit.io/taufik/certificate'

const ALBUMS: Albums = [
  { title: 'Belajar Dasar-Dasar DevOps - Dicoding', src: `${IMG_URL}/Belajar_Dasar-Dasar_DevOps.png` },
  { title: 'Belajar Jaringan Komputer Untuk Pemula - Dicoding', src: `${IMG_URL}/Belajar_Jaringan_Komputer_Untuk_Pemula.png` },
  { title: 'Mikrotik Dasar - ID Networkers', src: `${IMG_URL}/Mikrotik_Dasar_-_ID_Networkers.png` },
  { title: 'Jaringan Komputer Dasar - ID Networkers', src: `${IMG_URL}/Jaringan_Komputer_Dasar-ID-Networkers.png` },
  { title: 'Cisco Dasar - ID Networkers', src: `${IMG_URL}/Cisco_Dasar-ID-Networkers.png` },
  { title: 'Bootcamp Mikrotik (MTCNA & MTCRE) - ID Networkers', src: `${IMG_URL}/Bootcamp_Mikrotik__MTCNA___MTCRE_.png` }
]

export default ALBUMS