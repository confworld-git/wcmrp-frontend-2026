import React, { useEffect, useState } from "react";
import axios from "axios";

const OrganizingCommitteeMembers = () => {
  const [loading, setLoading] = useState(true);
  const [speakers, setSpeakers] = useState({});

  const SpeakerSkeleton = () => (
    <div className="bg-white shadow-lg rounded-md p-4 w-65 animate-pulse">
      <div className="w-52 h-46 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-2/3 mb-1"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
    </div>
  );

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const res = await axios.get(
          import.meta.env.VITE_API_URL +
            "/speaker?s=Scientific Committee,Review Committee"
        );
        if (res.status === 200 && res.data.data) {
          const newSpeakers = {};
          res.data.data.forEach((element) => {
            if (element._id) {
              newSpeakers[element._id] = element.speakers;
            }
          });
          setSpeakers(newSpeakers);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    api();
  }, []);

  const renderSection = (title) => (
    <div className="mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-sky-600">{title}</h1>
      <div className="flex flex-wrap justify-around items-stretch p-5 bg-blue-50 rounded-md gap-4 mt-8">
        {!loading && speakers[title]?.map((speaker, index) => (
          <div
            className="w-65 flex flex-col justify-start items-center bg-white shadow-lg rounded-md p-4"
            key={index}
          >
            <div className="min-w-54 h-54 overflow-hidden rounded-md">
              <img
                loading="lazy"
                alt={speaker.Name}
                className="w-full h-full object-top object-cover"
                src={`${import.meta.env.VITE_API_URL}/image/${speaker.Image}`}
              />
            </div>
            <div className="flex flex-col gap-2 mt-4 justify-center items-center">
              <h1 className="text-2xl font-bold text-cyan-600 text-center">
                {speaker.Name}
              </h1>
              <div className="text-center text-sm">
                {speaker.About.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {loading && Array(4).fill(null).map((_, index) => <SpeakerSkeleton key={index} />)}

        {!loading && !speakers[title]?.length && (
          <p>Information about our {title} will be updated soon.</p>
        )}
      </div>
    </div>
  );

  return (
    <section>
      <div className="mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl text-center font-bold text-sky-600">
          Organizing Committee Members
        </h1>
        {renderSection("Scientific Committee")}
        {renderSection("Review Committee")}
        <div className="text-center py-6">
          <p className="text-md font-medium text-gray-600">
            <a
              href="/ApplyingForOrganizingCommitteeMembers"
              className="text-blue-600 hover:text-blue-700"
            >
              Applying
            </a>{" "}
            for Organizing Committee Members
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommitteeMembers;
