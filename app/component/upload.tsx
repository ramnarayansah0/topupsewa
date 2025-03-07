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
        onSuccess={(result: any) => {
          const info = result.info as { public_id: string };
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="bg-lime-400 px-4 py-2 rounded-md" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
}
