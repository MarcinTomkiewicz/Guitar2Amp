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
  const [defaultDescription, setDefaultDescription] = useState(['']);
  const [success, setSuccess] = useState(false);
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
  });
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
  let descriptionPart;

  // F U N C T I O N S

  const handleChange = (e) => {
    e.preventDefault();
    setSearchedValue(e.target.value);
  };

  const handleSelectedGuitar = (e) => {
    e.preventDefault();
    guitars.map((guitar) => {
      if (guitar.name !== undefined && guitar.name === e.target.value) {
        setSelectedGuitar(guitar);
        setDefaultParagraphs(guitar.descr?.length);
        setDefaultCondition(guitar.condition);
        setToSave(guitar);
      }
      if (e.target.value === "add") {
        setSelectedGuitar("add");
        setDefaultParagraphs("1");
        setDefaultCondition("Select");
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
      if (e.target.value === "select") {
        setSelectedGuitar("select");
      }
    });
  };

  const handleDropdownChange = (e) => {
    e.preventDefault();
    if (selectedGuitar === "add") {
      setToSave({ ...toSave, [e.target.id]: e.target.value });
      setDefaultParagraphs(e.target.value);
      console.log(defaultDescription.length, defaultParagraphs);
      if (defaultDescription.length > defaultParagraphs) {
       setDefaultDescription(defaultDescription.splice(0,(defaultDescription.length-defaultParagraphs)))
       console.log(defaultDescription);
      } 
    } else {
      setToSave({ ...selectedGuitar, [e.target.id]: e.target.value });
      setDefaultParagraphs(e.target.value);
      console.log(defaultDescription.length, defaultParagraphs);
      if (defaultDescription.length > defaultParagraphs) {
        setDefaultDescription(defaultDescription.splice(0,(defaultDescription.length-defaultParagraphs)))
        console.log(defaultDescription);
       } 
    }
  };

  useEffect(() => {
    if (selectedGuitar === "add") {
      setDefaultDescription([]);
    }
    if (selectedGuitar !== "add" && selectedGuitar !== "select") {
      setDefaultDescription(selectedGuitar.descr);
    }
  }, [selectedGuitar, defaultParagraphs])

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    if (selectedGuitar === "add") {
      descriptionPart = e.target.value;
      for (let i = 0; i<4; i++) {
        if(parseInt(e.target.id) === i) {
          defaultDescription[i] = descriptionPart
        }
      }
      setToSave({...toSave, descr: defaultDescription})
      console.log(toSave, defaultDescription);
    } else {
      descriptionPart = e.target.value;
      for (let i = 0; i<4; i++) {
        if(parseInt(e.target.id) === i) {
          defaultDescription[i] = descriptionPart
          console.log(toSave, defaultDescription);
        }
      }
      setToSave({ ...selectedGuitar, descr: defaultDescription });      
    }
  };


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
    setSelectedGuitar("select");
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
    });
  };



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
          // multiple
          aria-label="size 3 select guitars"
          data-live-search="true"
          defaultValue={selectedGuitar}
          // onClick={handleChangeValue}
          onChange={handleSelectedGuitar}
        >
          <option value="select">Wybierz gitar?? do edycji</option>
          <option value="add">Dodaj gitar??</option>
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
                  <label for="floatingInputGrid">Ilo???? akapit??w opisu</label>
                </div>
              </div>
            </div>
          </div>
          <div className="container w-100 align-items-center">
            <div className="row g-3 mt-2">
              {Array(parseInt(defaultParagraphs))
                .fill("")
                .map((el, i) => {
                  // console.log(defaultDescription);
                  return (
                    <div className="col-md" key={i}>
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id={i}
                          placeholder=""
                          style={{ height: "100px" }}
                          value={defaultDescription[i]}
                          onChange={handleDescriptionChange}
                        ></textarea>
                        <label for="floatingInputGrid">Opis {i + 1}</label>
                      </div>
                    </div>
                  );
                })}
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
                    <option value="Select">Wybierz jako????</option>
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
                  value={!success ? "Zapisz gitar??" : "Zapisano z powodzeniem"}
                ></input>
              </div>
              <div className="col d-flex justify-content-center">
                <input
                  className="btn btn-secondary"
                  type="reset"
                  value="Porzu?? zmiany"
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
