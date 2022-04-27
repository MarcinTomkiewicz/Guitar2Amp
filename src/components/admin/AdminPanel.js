import { form } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useGetGuitars } from "../../hooks/useGetGuitars";
import { AdminInput } from "./AdminInput";

export const AdminPanel = () => {
  // V A R I A B L E S
  const guitars = useGetGuitars();
  const [searchedValue, setSearchedValue] = useState("");
  const [selectedGuitar, setSelectedGuitar] = useState("select");
  const [defaultParagraphs, setDefaultParagraphs] = useState("");
  const [defaultCondition, setDefaultCondition] = useState("");
  const [success, setSuccess] = useState(false);
  // const [selectedValue, setSelectedValue] = useState("")
  const [toSave, setToSave] = useState({
    name: "",
    short: "",
    price: "",
    descr: [],
    condition: "",
    case: "",
    weight: "",
    serial: "",
    type: "",
    isActive: true,
    sold: false,
  })
  const arrayOfKeys = [
    "name",
    "short",
    "price",
    "descr",
    "condition",
    "case",
    "weight",
    "serial",
    "type",
    "isActive",
    "sold",
  ];

  // F U N C T I O N S

  const handleChange = (e) => {
    e.preventDefault();
    setSearchedValue(e.target.value);
  };
  
//   const handleChangeValue = (e) => {
//     e.preventDefault();
//     setSelectedValue(e.target.value)
//   console.log(e.target.value, selectedValue);
// }

  const handleSelectedGuitar = (e) => {
    e.preventDefault();
    guitars.map((guitar) => {
      if (guitar.name !== undefined && guitar.name === e.target.value) {
        setSelectedGuitar(guitar);
        // setSelectedValue(guitar.name)
          setDefaultParagraphs(guitar.descr?.length);
        setDefaultCondition(guitar.condition);
        setToSave(guitar)
        // console.log(selectedValue);
      }
      if (e.target.value === "add") {
        setSelectedGuitar("add");
        // setSelectedValue("add")
          setDefaultParagraphs("1");
        setDefaultCondition("Select");
        // console.log(selectedValue);
      }
      if (e.target.value === "select") {
        setSelectedGuitar("select")
        // setSelectedValue("select")
        // console.log(selectedValue);
        };
    });
  };

  // const handleInputChange = (e) => {
  //   e.preventDefault();
  //   if (selectedGuitar !== "add") {
  //     toSave = { ...selectedGuitar, [e.target.id]: e.target.value };
  //   } else {
  //     toSave = { ...toSave, [e.target.id]: e.target.value };
  //   }
  //   console.log(toSave);
  // };

  const handleDropdownChange = (e) => {
    e.preventDefault();
    if (selectedGuitar === "add") {
      setToSave({ ...toSave, [e.target.id]: e.target.value });
      setDefaultParagraphs(e.target.value);
    } else {
      setToSave({ ...selectedGuitar, [e.target.id]: e.target.value });
      setDefaultParagraphs(e.target.value);
    }
  };

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    toSave.descr = new Array(parseInt(defaultParagraphs))
    console.log(toSave.descr);
    toSave.descr.map((el, i) => {
      
      if (i === e.target.id) {
        console.log(el);
        el = e.target.value
      }
    })
    console.log(toSave.descr[0]);
  }

  const handleConditionChange = (e) => {
    e.preventDefault();
    if (selectedGuitar === "add") {
      setToSave({ ...toSave, [e.target.id]: e.target.value });
      setDefaultCondition(e.target.value);
    } else {
      setToSave({ ...selectedGuitar, [e.target.id]: e.target.value });
      setDefaultCondition(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toSave, selectedGuitar);
    setSuccess(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSelectedGuitar("select")
    setToSave({
      name: "",
      short: "",
      price: "",
      descr: [],
      condition: "",
      case: "",
      weight: "",
      serial: "",
      type: "",
      isActive: true,
      sold: false,
    })
  }

  return (
    <div className="container mt-3">
      <div className="container w-50 align-items-center">
        <input
          type="text"
          className="formControl w-100 border-1 border-light"
          placeholder="Szukaj w gitarach"
          onChange={handleChange}
        ></input>
        <select
          className="form-select"
          size="3"
          multiple
          aria-label="size 3 select guitars"
          data-live-search="true"
          defaultValue={selectedGuitar}
          // onClick={handleChangeValue}
          onChange={handleSelectedGuitar}
        >
          <option value="select">
            Wybierz gitarę do edycji
          </option>
          <option value="add">Dodaj gitarę</option>
          {guitars.map((el, i) => {
            if (el.name !== undefined) {
              if (el?.name.includes(searchedValue)) {
                return (
                  <option value={el.name} key={i}>
                    {el.name}
                  </option>
                );
              }
            }
          })}
        </select>
      </div>
      {selectedGuitar !== "select" ? (
        <form name="GuitarEditor" onSubmit={handleSubmit} onReset={handleReset}>
          <div className="container w-100 align-items-center">
            <div className="row g-3 mt-2">
              {arrayOfKeys.map((el) => {
                return el === "name" || el === "price" || el === "short" ? (
                  <AdminInput
                    label={el}
                    guitar={selectedGuitar}
                    toSave={toSave}
                    setToSave={setToSave}
                    key={el}
                  ></AdminInput>
                ) : (
                  ""
                );
              })}
              <div className="col-md">
                <div className="form-floating">
                  <select
                    className="form-control"
                    id="paragraph"
                    value={defaultParagraphs}
                    onChange={handleDropdownChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <label for="floatingInputGrid">Ilość akapitów opisu</label>
                </div>
              </div>
            </div>
          </div>
          <div className="container w-100 align-items-center">
            <div className="row g-3 mt-2">
              {defaultParagraphs <= 4
                ? Array(parseInt(defaultParagraphs))
                    .fill("")
                    .map((el, i) => {
                      return (
                        <div className="col-md" key={i}>
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              id={i}
                              placeholder=""
                              style={{ height: "100px" }}
                              defaultValue={
                                selectedGuitar !== "add"
                                  ? selectedGuitar.descr[i]
                                  : ""
                              }
                              onChange={handleDescriptionChange}
                            ></textarea>
                            <label for="floatingInputGrid">Opis {i + 1}</label>
                          </div>
                        </div>
                      );
                    })
                : ""}
            </div>
          </div>
          <div className="container w-100 align-items-center">
            <div className="row g-3 mt-2">
              <div className="col-md">
                <div className="form-floating">
                  <select
                    className="form-control"
                    id="condition"
                    value={defaultCondition}
                    onChange={handleConditionChange}
                  >
                    <option value="Select">Wybierz jakość</option>
                    <option value="Mint">Mint</option>
                    <option value="Near mint">Near mint</option>
                    <option value="Average">Average</option>
                    <option value="Poor">Poor</option>
                    <option value="Very Poor">Very Poor</option>
                  </select>
                  <label for="floatingInputGrid">Stan</label>
                </div>
              </div>
              {arrayOfKeys.map((el) => {
                return el === "case" || el === "weight" || el === "serial" ? (
                  <AdminInput
                    label={el}
                    guitar={selectedGuitar}
                    toSave={toSave}
                    setToSave={setToSave}
                    key={el}
                  ></AdminInput>
                ) : (
                  ""
                );
              })}
            </div>
          </div>
          <div className="container d-flex w-50">
            <div className="row g-3 mt-2 align-items-center w-100">
              <div className="col d-flex justify-content-center">
                <input
                  className={!success ? "btn btn-primary" : "btn btn-success"}
                  type={!success ? "submit" : "button"}
                  value={!success ? "Zapisz gitarę" : "Zapisano z powodzeniem"}
                ></input>
              </div>
              <div className="col d-flex justify-content-center">
                <input
                  className="btn btn-secondary"
                  type="reset"
                  value="Porzuć zmiany"
                ></input>
              </div>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};
