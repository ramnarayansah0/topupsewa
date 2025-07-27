"use client";
import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

export default function Uploadq() {
  const [publicId, setPublicId] = useState<string | null>(null);

  return (
    <>
      {publicId && <CldImage src={publicId} width={270} height={180} alt="Uploaded Image" />}
      
      <CldUploadWidget
        uploadPreset="gdbyt2f"
        onSuccess={(result: unknown) => {
          if (result && typeof result === 'object' && 'info' in result && result.info && typeof result.info === 'object' && 'public_id' in result.info) {
            const info = result.info as { public_id: string };
            setPublicId(info.public_id);
          }
        }}
      >
        {({ open }) => (
          <button 
            className="bg-lime-400 dark:bg-lime-600 px-4 py-2 rounded-md text-gray-900 dark:text-white hover:bg-lime-500 dark:hover:bg-lime-700 transition duration-200" 
            onClick={() => open()}
          >
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
}
