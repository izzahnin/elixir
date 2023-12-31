import {
  DocumentData,
  Query,
  collection,
  getDocs,
  or,
  query,
  where,
} from "firebase/firestore";
import { PerfumeProps, jsonToParfume } from "./perfume";
import { db } from "../config";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export default async function searchPerfume(keyword: string) {
  const perfumes: PerfumeProps[] = [];
//   let q: Query<DocumentData, DocumentData>;
  keyword = keyword.toLowerCase().trim();

//   q = query(
//     collection(db, "perfume"),
//     or(
//       where("topNotes", "array-contains", capitalizeFirstLetter(keyword)),
//       where("middleNotes", "array-contains", capitalizeFirstLetter(keyword)),
//       where("baseNotes", "array-contains", capitalizeFirstLetter(keyword)),
//     ),
//   );

  const querySnapshot = await getDocs(collection(db, "perfume"));
  const fetchPromises = querySnapshot.docs.map(async (doc) => {
    const perfume = await jsonToParfume(doc.data());
    perfumes.push(perfume);
  });

  await Promise.all(fetchPromises);
  // filter the perfumes
  perfumes?.filter(
    (perfume) =>
      perfume.name.toLowerCase().includes(keyword) ||
      perfume.brand.toLowerCase().includes(keyword) ||
      perfume.description.toLowerCase().includes(keyword) ||
      perfume.topNotes.includes(capitalizeFirstLetter(keyword)) ||
      perfume.middleNotes.includes(capitalizeFirstLetter(keyword)) ||
      perfume.baseNotes.includes(capitalizeFirstLetter(keyword)),
  );

  return perfumes;
}
