import { db } from "../utils/firebaseConfig";
import { collection, query, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetGuitars = () => {
  const [allGuitars, setAllGuitars] = useState([]);
  const [guitars, setGuitars] = useState([]);
  const guitarsWithType = [];

  useEffect(() => {
    const getGuitars = async () => {
      const collectDataFromDB = query(collection(db, "guitars"));
      const dataFromDB = [];
      const documents = await getDocs(collectDataFromDB);
      documents.docs.map((document) => {
        dataFromDB.push(document.id);
      });
      setAllGuitars(dataFromDB);
    };
    getGuitars();
  }, []);

  useEffect(() => {
    allGuitars.map((currentType, i) => {
      const getGuitarsFromDB = async () => {
        const docRef = doc(db, "guitars", currentType);
        const docSnap = await getDoc(docRef);
          setGuitars(Object.values(docSnap.data()));
      };
      getGuitarsFromDB();
    });
  }, [allGuitars]);

  return guitars;
};
