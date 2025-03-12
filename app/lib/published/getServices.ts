import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export interface Service {
  id: string;
  name: string;
  description: string;
}

export async function getServices(): Promise<Service[]> {
  try {
    const snapshot = await getDocs(collection(db, "services"));
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Service, "id">),
    }));
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}
