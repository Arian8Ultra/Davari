/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export async function UPLOAD_FILE({
  file,
  token,
  onSuccess,
  onFail,
}: {
  file?: File;
  token?: string;
  onSuccess: (res: any) => void;
  onFail: (err: any) => void;
}) {
    const form = new FormData();
    file && form.append("files", file);

    const response = await fetch(
      "http://172.16.23.50:7030/api/upload/upload-file/",
      {
        method: "POST",
        headers: {
          Authorization:
            `Bearer ${token ? token : ""}`,
        },
        body: form,
      }
    );

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      onSuccess(result);
    }else{
        onFail(response);
    }
}
