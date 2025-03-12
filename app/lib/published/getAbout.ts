import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export interface AboutData {
  section:{
    name: string;
    extra: string;
  };
  profileImageUrl: string;
  description: string;

  greeting: string;
  
  fullDescription: string;
  contact: {
    text: string;
    link: string;
  };
  resume: {
    text: string;
    fileUrl: string;
  };
  
}

export async function getAbout(): Promise<AboutData | null> {
  try {
    const docRef = doc(db, "main", "About");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    return docSnap.data() as AboutData;
  } catch (error) {
    console.error("Error fetching About data:", error);
    return null;
  }
}
