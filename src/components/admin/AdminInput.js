import { useEffect, useState } from "react";

export const AdminInput = ({ label, guitar, toSave, setToSave }) => {
  const [defaultValue, setDefaultValue] = useState("");

  const labels = [
    { code: "name", label: "Nazwa gitary" },
    { code: "price", label: "Cena" },
    { code: "descr", label: "Opis" },
    { code: "condition", label: "Stan" },
    { code: "case", label: "Case" },
    { code: "weight", label: "Waga" },
    { code: "short", label: "Nazwa krótka" },
    { code: "serial", label: "Numer seryjny" },
    { code: "type", label: "Typ" },
    { code: "isActive", label: "Aktywny?" },
    { code: "sold", label: "Sprzedany?" },
  ];

  useEffect(() => {
    if (guitar === "add") {
      setDefaultValue("");
    }
    if (guitar !== "add" && guitar !== "select") {
      setDefaultValue(guitar[label]);
    }
  }, [guitar]);

  const handleInputChange = (e) => {
    e.preventDefault();
    if (guitar !== "add") {
      setToSave({ ...guitar, [e.target.id]: e.target.value });
    } else {
      setToSave({ ...toSave, [e.target.id]: e.target.value });
    }
    console.log(toSave);
    setDefaultValue(e.target.value);
  };

  return (
    <div className="col-md">
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id={label}
          placeholder=""
          value={defaultValue}
          onChange={handleInputChange}
        ></input>
        {labels.map((el) => {
          if (el.code === label)
            return (
              <label for="floatingInputGrid" key={el.code}>
                {el.label}
              </label>
            );
        })}
      </div>
    </div>
  );
};
