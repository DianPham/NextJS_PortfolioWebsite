import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import {HeroSection} from "../model/HeroSection"

export async function getHeroSection(): Promise<HeroSection | null> {
  try {
    const docRef = doc(db, "main", "HeroSection");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    return docSnap.data() as HeroSection;
  } catch (error) {
    console.error("Error fetching HeroSection data:", error);
    return null;
  }
}
