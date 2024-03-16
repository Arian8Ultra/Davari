/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export async function UPLOAD_FILE({
  file,
  token,
  onSuccess,
  onFail,
}: {
  file?: File;
  token?: string;
  onSuccess?: (res: any) => void;
  onFail?: (err: any) => void;
}) {
  const form = new FormData();
  file && form.append("files", file);
  const localToken = localStorage.getItem("token");

  const response = await fetch(
    "http://172.16.23.50:7030/api/upload/upload-file/",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token ? token : localToken || ""}`,
      },
      body: form,
    }
  );

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    onSuccess && onSuccess(result);
  } else {
    onFail && onFail(response);
  }
}

export async function UPLOAD_FILES({
  files,
  token,
  onSuccess,
  onFail,
}: {
  files?: File[];
  token?: string;
  onSuccess?: (res: any) => void;
  onFail?: (err: any) => void;
}) {
  const form = new FormData();
  files && files.forEach((file) => form.append("files", file));
  const localToken = localStorage.getItem("token");

  const response = await fetch(
    "http://172.16.23.50:7030/api/upload/upload-file/",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token ? token :  localToken || ""}`,
      },
      body: form,
    }
  );

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    onSuccess && onSuccess(result);
  } else {
    onFail && onFail(response);
  }
}
