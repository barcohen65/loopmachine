import ALL_TRACK from "../tracks/ALL TRACK.mp3";
import TAMBOURINE from "../tracks/TAMBOURINE.mp3";
import B_VOC from "../tracks/B VOC.mp3";
import DRUMS from "../tracks/DRUMS.mp3";
import HE_HE_VOC from "../tracks/HE HE VOC.mp3";
import HIGH_VOC from "../tracks/HIGH VOC.mp3";
import JIBRISH from "../tracks/JIBRISH.mp3";
import LEAD_1 from "../tracks/LEAD 1.mp3";
import UUHO_VOC from "../tracks/UUHO VOC.mp3";
import { Player } from "./player";

export const playerArray = [
  new Player({audio: ALL_TRACK, name: "All Track"}),
  new Player({audio: TAMBOURINE, name: "Tambourine"}),
  new Player({ audio: B_VOC, name: "B VOC" }),
  new Player({ audio: DRUMS, name: "Drums" }),
  new Player({ audio: HE_HE_VOC, name: "HE HE VOC" }),
  new Player({ audio: HIGH_VOC, name: "High VOC" }),
  new Player({ audio: JIBRISH, name: "Jibrish" }),
  new Player({ audio: LEAD_1, name: "LEAD 1" }),
  new Player({ audio: UUHO_VOC, name: "UUHO VOC" }),
];
