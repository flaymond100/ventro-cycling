import Image from "next/image";

export const Platforms = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:ml-16 pl-6 md:pl-12 gap-4 z-20 mb-18 relative mt-12 items-start justify-start max-w-2xl">
      <div className="flex flex-col justify-end items-center min-h-20">
        <Image
          width={150}
          height={150}
          src={`https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65549b703d9a1a82ff6ceffc_garmin-logo.webp?alt=media&token=f6676ba3-2e0b-46bd-b377-d1f9cef4aff2`}
          alt="garmin logo"
        />
      </div>

      <div className="flex flex-col justify-end items-center  min-h-20">
        <Image
          width={150}
          height={150}
          src={`https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530c5addac87c670d4c904_Wahoo%402x.webp?alt=media&token=e1b7e6b7-ebd4-486a-bde2-f42e474f081e`}
          alt="wahoo logo"
        />
      </div>

      <div className="flex flex-col justify-end items-center  min-h-20">
        <Image
          width={150}
          height={150}
          src={`https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530cc1e8c20d4b3f24c4f0_Strava_Logo%402x.webp?alt=media&token=bb489393-06d7-4ae7-b131-d0c3156d2f32`}
          alt="strava logo"
        />
      </div>

      <div className="flex flex-col justify-end items-center  min-h-20">
        <Image
          width={150}
          height={150}
          src={`https://firebasestorage.googleapis.com/v0/b/nrc-team.appspot.com/o/files%2Fcarousel%2F65530c5a5e0d75755dd4bf51_zwift-inc-logo-vector-2%402x.webp?alt=media&token=4af41770-98ee-4d9f-8f8d-95a119537883`}
          alt="zwift logo"
        />
      </div>
      <div className="flex flex-col justify-end items-center  min-h-20">
        <Image width={150} height={150} src="/tp.png" alt="logo" />
      </div>
    </div>
  );
};
