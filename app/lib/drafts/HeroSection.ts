// services/heroSectionDraft.ts
import { doc, onSnapshot, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { HeroSection} from "../model/HeroSection";

// Subscribe to real-time updates for the draft
export function subscribeDraftHeroSection(
  callback: (data: HeroSection | null) => void
) {
  const docRef = doc(db, "drafts", "HeroSection");
  const unsubscribe = onSnapshot(docRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.data() as HeroSection);
    } else {
      callback(null);
    }
  });
  return unsubscribe; // call unsubscribe() when you're done
}

// Save draft changes
export async function saveDraftHeroSection(draftData: HeroSection) {
  const docRef = doc(db, "drafts", "HeroSection");
  await setDoc(docRef, draftData);
}

export async function publishDraftHeroSection() {
  const draftRef = doc(db, "drafts", "HeroSection");
  const publishedRef = doc(db, "main", "HeroSection");

  const draftSnap = await getDoc(draftRef);
  if (!draftSnap.exists()) {
    throw new Error("No draft data found!");
  }

  // Copy draft into published location
  await setDoc(publishedRef, {
    ...draftSnap.data(),
    publishedAt: new Date()
  });
}
