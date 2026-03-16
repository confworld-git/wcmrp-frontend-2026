"use client"

import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { toaster } from "evergreen-ui"
import { FcGallery } from "react-icons/fc"
import { IoMdRemove } from "react-icons/io"
import { GrAdd } from "react-icons/gr"
import Conform from "../conform/conform"
import { useLocation } from "react-router-dom"

const Speakers = () => {
  const speakersForm = useRef()
  const ocmForm = useRef()
  const addSpeakersRef = useRef()
  const addOcmRef = useRef()
  const location = useLocation()

  const [sectionone, setSectionone] = useState("Keynote Speakers")
  const [sectiontwo, setSectiontwo] = useState("Scientific Committee")
  const [speakersPosition, setSpeakersPosition] = useState(1)
  const [ocmPosition, setOcmPosition] = useState(1)
  const [conformDelete, setConformDelete] = useState({
    isOpen: false,
    id: null,
    section: null,
  })
  const [speakersAbout, setSpeakersAbout] = useState(1)
  const [ocmAbout, setOcmAbout] = useState(1)
  const [speakersImage, setSpeakersImage] = useState()
  const [ocmImage, setOcmImage] = useState()
  const [speakers, setSpeakers] = useState({})

  const Section1 = [
    "Welcome Address",
    "Guest of Honour",
    "Conference Chair",
    "Keynote Speakers",
    "Session Speakers",
    "Session Chairs",
  ]

  const Section2 = ["Scientific Committee", "Review Committee"]

  // FIXED: Improved hash navigation with proper timing and offset handling
  useEffect(() => {
    const hash = location.hash

    const scrollToSection = () => {
      let targetRef = null

      // Determine which section to scroll to
      if (hash === "#add-speakers") {
        targetRef = addSpeakersRef.current
      } else if (hash === "#add-ocm") {
        targetRef = addOcmRef.current
      }

      if (targetRef) {
        // Calculate proper scroll position accounting for fixed headers
        const headerOffset = 100 // Adjust this value based on your header height
        const elementPosition = targetRef.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        // Smooth scroll to the calculated position
        window.scrollTo({
          top: Math.max(0, offsetPosition), // Ensure we don't scroll above the page
          behavior: "smooth",
        })
      }
    }

    // Add delay to ensure DOM is fully rendered and layout is stable
    const timeoutId = setTimeout(scrollToSection, 150)

    // Cleanup timeout on unmount or dependency change
    return () => clearTimeout(timeoutId)
  }, [location.hash])

  // ALTERNATIVE: If you prefer using scrollIntoView with better options
  // useEffect(() => {
  //   const hash = location.hash;

  //   const scrollToSection = () => {
  //     if (hash === "#add-speakers" && addSpeakersRef.current) {
  //       addSpeakersRef.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //         inline: "nearest"
  //       });
  //     } else if (hash === "#add-ocm" && addOcmRef.current) {
  //       addOcmRef.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //         inline: "nearest"
  //       });
  //     }
  //   };

  //   const timeoutId = setTimeout(scrollToSection, 150);
  //   return () => clearTimeout(timeoutId);
  // }, [location.hash]);

  const sectionOneChange = (value) => {
    setSectionone(value)
    if (speakers[`${value}`]) {
      setSpeakersPosition(speakers[`${value}`]?.length + 1)
    } else {
      setSpeakersPosition(1)
    }
  }

  const sectionTwoChange = (value) => {
    setSectiontwo(value)
    if (speakers[`${value}`]) {
      setOcmPosition(speakers[`${value}`]?.length + 1)
    } else {
      setOcmPosition(1)
    }
  }

  const speakersPositionOnChange = (value) => {
    setSpeakersPosition(Number.parseInt(value))
  }

  const ocmPositionOnChange = (value) => {
    setOcmPosition(Number.parseInt(value))
  }

  const HandleSpeaker = async () => {
    try {
      const allSections = [...Section1, ...Section2]
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/speaker?s=${allSections.join(",")}`)
      if (response.status === 200) {
        const newSpeakers = {}
        response.data.data.forEach((element) => {
          if (element._id) {
            newSpeakers[element._id] = element.speakers.sort((a, b) => {
              if (a.position > b.position) return 1
              if (a.position < b.position) return -1
              return 0
            })
          }
        })
        setSpeakers(newSpeakers)
        if (newSpeakers[`${sectionone}`]) {
          setSpeakersPosition(newSpeakers[`${sectionone}`]?.length + 1)
        }
        if (newSpeakers[`${sectiontwo}`]) {
          setOcmPosition(newSpeakers[`${sectiontwo}`]?.length + 1)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    HandleSpeaker()
  }, [])

  const checked = (index, section) => {
    if (speakers[`${section}`]) {
      const arr = speakers[`${section}`]
      if (arr.length > index) {
        if (index === 0) {
          const newVal = arr[index]?.position || 0
          return newVal / 2
        } else if (index === 1) {
          const newVal = arr[index]?.position || 0
          const Val = arr[0]?.position || 0
          return (newVal + Val) / 2
        } else if (index >= 2) {
          const newVal = arr[index]?.position || 0
          const Val = arr[index - 1]?.position || 0
          return (newVal + Val) / 2
        }
      } else {
        return index + 1
      }
    } else {
      return index + 1
    }
  }

  const SubmitSpeaker = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData(speakersForm.current)
      formData.set("position", checked(speakersPosition - 1, sectionone))
      formData.set("Section", sectionone)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/speaker`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.status === 201) {
        setSpeakers({
          ...speakers,
          [sectionone]: [...(speakers[sectionone] || []), response.data.data].sort((a, b) => {
            if (a.position > b.position) return 1
            if (a.position < b.position) return -1
            return 0
          }),
        })
        setSpeakersPosition(speakersPosition + 1)
        speakersForm.current.reset()
        setSpeakersImage(null)
        setSpeakersAbout(1)
        toaster.success(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toaster.danger("Failed to Add Speaker")
    }
  }

  const SubmitOCM = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData(ocmForm.current)
      formData.set("position", checked(ocmPosition - 1, sectiontwo))
      formData.set("Section", sectiontwo)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/speaker`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.status === 201) {
        setSpeakers({
          ...speakers,
          [sectiontwo]: [...(speakers[sectiontwo] || []), response.data.data].sort((a, b) => {
            if (a.position > b.position) return 1
            if (a.position < b.position) return -1
            return 0
          }),
        })
        setOcmPosition(ocmPosition + 1)
        ocmForm.current.reset()
        setOcmImage(null)
        setOcmAbout(1)
        toaster.success(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toaster.danger("Failed to Add OCM")
    }
  }

  const Delete_Speaker = async (sec, id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/speaker/${id}`)
      if (response.status === 200) {
        toaster.success(response.data.message)
        setSpeakers({
          ...speakers,
          [sec]: speakers[sec].filter((speaker) => speaker._id !== id),
        })
        // Update position counters
        if (Section1.includes(sec)) {
          setSpeakersPosition(speakers[sec]?.length || 1)
        } else if (Section2.includes(sec)) {
          setOcmPosition(speakers[sec]?.length || 1)
        }
      }
    } catch (error) {
      console.error("Error deleting speaker:", error)
      toaster.danger("Failed to delete speaker")
    }
  }

  return (
    <section>
      {/* Add speakers - FIXED: Better scroll margin */}
      <section id="add-speakers" ref={addSpeakersRef} className="w-full scroll-mt-24 pt-12">
        <h2 className="text-3xl pb-4 text-cyan-600 text-center font-bold">Add Speakers</h2>
        <form
          className="p-5 w-full flex flex-wrap md:flex-col justify-center items-center gap-5"
          ref={speakersForm}
          onSubmit={SubmitSpeaker}
        >
          <div className="flex flex-wrap justify-center items-center text-nowrap gap-5 w-full">
            {Section1.map((item, index) => (
              <div key={index}>
                <label
                  className={`text-md font-medium p-2 rounded-2xl transition-all duration-200 ease-in-out cursor-pointer ${
                    sectionone === item ? "bg-indigo-500 text-white opacity-80" : ""
                  }`}
                  htmlFor={`speakers-${item}`}
                >
                  {item}
                  <input
                    className=""
                    checked={Boolean(sectionone === item)}
                    type="radio"
                    name="Section"
                    value={item}
                    id={`speakers-${item}`}
                    hidden
                    onChange={(e) => sectionOneChange(e.target.value)}
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-10/12 flex flex-wrap md:flex-row justify-center gap-5">
              <div className="pt-5">
                <label
                  className="flex flex-col w-54  h-54 justify-center items-center rounded-2xl outline-dashed outline-gray-300 overflow-hidden cursor-pointer"
                  htmlFor="speakers-image"
                >
                  {speakersImage ? (
                    <img
                      className="w-full h-full object-top object-cover"
                      src={speakersImage || "/placeholder.svg"}
                      alt="Preview"
                    />
                  ) : (
                    <div className="p-2 flex flex-col justify-center items-center gap-2">
                      <p className="text-md font-medium text-gray-500 text-center">Choose or Drop your Image Here</p>
                      <FcGallery className="text-5xl" />
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="speakers-image"
                  hidden
                  accept="image/*"
                  name="Image"
                  onChange={(e) => setSpeakersImage(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
              <div className="w-md p-5 space-y-2">
                <textarea
                  className="w-full p-2 border border-gray-400 focus:outline-1 rounded-md"
                  type="text"
                  name="Name"
                  placeholder="Speaker Name"
                  required
                ></textarea>
                <div className="w-full flex flex-col gap-4">
                  {Array(speakersAbout)
                    .fill(null)
                    .map((item, index) => (
                      <div key={index} className="flex flex-row justify-center items-center gap-2">
                        <textarea
                          className="w-full p-2 border border-gray-400 focus:outline-1 rounded-md"
                          type="text"
                          name="About"
                          placeholder="Speaker About"
                          required
                        ></textarea>
                        {speakersAbout > 1 && (
                          <div className="w-5">
                            <button
                              type="button"
                              onClick={() => setSpeakersAbout(Math.max(1, speakersAbout - 1))}
                              className="mr-5 rounded-full shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out"
                            >
                              <IoMdRemove className="text-xl" />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
                <div className="w-full flex justify-end items-center">
                  <button
                    type="button"
                    onClick={() => setSpeakersAbout(speakersAbout + 1)}
                    className="mr-5 p-3 rounded-full shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out"
                  >
                    <GrAdd className="text-xl" />
                  </button>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="speakers-position">Position</label>
                  <input
                    className="w-full p-2 border border-gray-400 focus:outline-1 rounded-md"
                    id="speakers-position"
                    name="position"
                    type="number"
                    value={speakersPosition}
                    onChange={(e) => speakersPositionOnChange(e.target.value)}
                    placeholder="Enter position"
                    min="1"
                  />
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="px-10 py-2.5 rounded-md bg-green-500 hover:bg-green-600 text-white">
                Add Speaker
              </button>
            </div>
          </div>
        </form>
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-900">Speaker Details</h2>
          {Section1.map((section1, index) => (
            <div key={index} className="p-5 bg-blue-50 rounded-md mt-4">
              <h1 className="text-xl font-medium my-5">{section1}</h1>
              <div className="flex flex-wrap justify-around items-stretch gap-4">
                {speakers[section1]?.map((speaker, index) => (
                  <div
                    className="w-65 flex flex-col justify-start items-center bg-white shadow-lg rounded-md p-4"
                    key={index}
                  >
                    <div className="w-54 h-54 overflow-hidden rounded-md">
                      <img
                        loading="lazy"
                        className="h-full w-full object-top object-cover"
                        alt={speaker.Name}
                        src={`${import.meta.env.VITE_API_URL}/image/${speaker.Image}`}
                      />
                    </div>
                    <div className="flex flex-col gap-2 mt-4 justify-center items-center">
                      <h1 className="text-2xl font-[600] text-cyan-600 text-center">{speaker.Name}</h1>
                      <div className="text-center text-gray-700 text-sm">
                        {speaker.About.map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                      </div>
                      <p className="">Position: {index + 1}</p>
                      <button
                        onClick={() =>
                          setConformDelete({
                            isOpen: true,
                            id: speaker._id,
                            section: section1,
                          })
                        }
                        className="bg-orange-500 hover:bg-orange-500 text-white px-3 py-1 rounded-md shadow-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add OCM - FIXED: Better scroll margin */}
      <section id="add-ocm" ref={addOcmRef} className="w-full scroll-mt-24 pt-8">
        <h2 className="text-3xl pb-4 text-cyan-600 text-center font-bold">Add OCM</h2>
        <form
          className="p-5 w-full flex flex-wrap md:flex-col justify-center items-center gap-5"
          ref={ocmForm}
          onSubmit={SubmitOCM}
        >
          <div className="flex flex-wrap justify-center items-center text-nowrap gap-5 w-full">
            {Section2.map((item, index) => (
              <div key={index}>
                <label
                  className={`text-md font-medium p-2 rounded-2xl transition-all duration-200 ease-in-out cursor-pointer ${
                    sectiontwo === item ? "bg-indigo-500 text-white opacity-80" : ""
                  }`}
                  htmlFor={`ocm-${item}`}
                >
                  {item}
                  <input
                    className=""
                    checked={Boolean(sectiontwo === item)}
                    type="radio"
                    name="Section"
                    value={item}
                    id={`ocm-${item}`}
                    hidden
                    onChange={(e) => sectionTwoChange(e.target.value)}
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-10/12 flex flex-wrap md:flex-row justify-center gap-5">
              <div className="pt-5">
                <label
                  className="flex flex-col w-54 h-54 justify-center outline-dashed outline-gray-300 items-center rounded-2xl  overflow-hidden cursor-pointer"
                  htmlFor="ocm-image"
                >
                  {ocmImage ? (
                    <img
                      className="w-full h-full object-top object-cover"
                      src={ocmImage || "/placeholder.svg"}
                      alt="Preview"
                    />
                  ) : (
                    <div className="p-2 flex flex-col justify-center items-center gap-2">
                      <p className="text-md font-medium text-gray-500 text-center">Choose or Drop your Image Here</p>
                      <FcGallery className="text-5xl" />
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="ocm-image"
                  hidden
                  accept="image/*"
                  name="Image"
                  onChange={(e) => setOcmImage(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
              <div className="w-md p-5 space-y-2">
                <textarea
                  className="w-full p-2 border border-gray-400 focus:outline-1 rounded-md"
                  type="text"
                  name="Name"
                  placeholder="OCM Name"
                  required
                ></textarea>
                <div className="w-full flex flex-col gap-4">
                  {Array(ocmAbout)
                    .fill(null)
                    .map((item, index) => (
                      <div key={index} className="flex flex-row justify-center items-center gap-2">
                        <textarea
                          className="w-full p-2 border border-gray-400 focus:outline-1 rounded-md"
                          type="text"
                          name="About"
                          placeholder="OCM About"
                          required
                        ></textarea>
                        {ocmAbout > 1 && (
                          <div className="w-5">
                            <button
                              type="button"
                              onClick={() => setOcmAbout(Math.max(1, ocmAbout - 1))}
                              className="mr-5 rounded-full shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out"
                            >
                              <IoMdRemove className="text-xl" />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
                <div className="w-full flex justify-end items-center">
                  <button
                    type="button"
                    onClick={() => setOcmAbout(ocmAbout + 1)}
                    className="mr-5 p-3 rounded-full shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out"
                  >
                    <GrAdd className="text-xl" />
                  </button>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="ocm-position">Position</label>
                  <input
                    className="w-full p-2 border border-gray-400 focus:outline-1 rounded-md"
                    id="ocm-position"
                    name="position"
                    type="number"
                    value={ocmPosition}
                    onChange={(e) => ocmPositionOnChange(e.target.value)}
                    placeholder="Enter position"
                    min="1"
                  />
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="px-10 py-2.5 rounded-md bg-green-500 hover:bg-green-600 text-white">
                Add OCM
              </button>
            </div>
          </div>
        </form>
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-900">OCM Details</h2>
          {Section2.map((section2, index) => (
            <div key={index} className="p-5 bg-blue-50 rounded-md mt-4">
              <h1 className="text-xl font-medium my-5">{section2}</h1>
              <div className="flex flex-wrap justify-around items-stretch gap-4">
                {speakers[section2]?.map((speaker, index) => (
                  <div
                    className="w-65 flex flex-col justify-start items-center bg-white shadow-lg rounded-md p-4"
                    key={index}
                  >
                    <div className="w-54 h-54 overflow-hidden rounded-md">
                      <img
                        loading="lazy"
                        className="h-full w-full object-top object-cover"
                        alt={speaker.Name}
                        src={`${import.meta.env.VITE_API_URL}/image/${speaker.Image}`}
                      />
                    </div>
                    <div className="flex flex-col gap-2 mt-4 justify-center items-center">
                      <h1 className="text-2xl font-[600] text-cyan-600 text-center">{speaker.Name}</h1>
                      <div className="text-center text-gray-700 text-sm">
                        {speaker.About.map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                      </div>
                      <p className="">Position: {index + 1}</p>
                      <button
                        onClick={() =>
                          setConformDelete({
                            isOpen: true,
                            id: speaker._id,
                            section: section2,
                          })
                        }
                        className="  bg-orange-500 hover:bg-orange-500 text-white px-3 py-1 rounded-md shadow-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {conformDelete.isOpen && <Conform data={{ data: conformDelete, Delete_Speaker }} close={setConformDelete} />}
    </section>
  )
}

export default Speakers
