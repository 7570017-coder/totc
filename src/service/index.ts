import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization:
      "Bearer BQCRRUgdH_nMBzoB3GaYsOzpVKRT3ixcYidWWnCcZmeAfMvcNan6XcDeE8ACL1y1BwPjM0fIZm4ROfYBGFpkP7J-cbzRdOJst4OLXyLoQHWQOr2wRWNuI17gawCs5VF7dj4F8aZmhxu2VAITdZR6RkkfTB4MEMBQtkaifhkVQU4eDiVCs_yxSm6FSP-sE4PLbEnLkPMV1WR0nuydnBN3KLYMvH_8Vy9aGRn8fSFBCa6DU6Cq2HRCQirSZ8ExjdtlgW6eIfdcIbC5lMsNYgdcPBghrKS-2sFPRJFxZ7-a2Dm-dShnI8v09Wy8P9TbV9WPtkOm8KrgzKvQBGITXrxv7gr-k8rEXbZdlOoXmVm-JqhuGVOndAuJSDOsz_OtBDu44BW3tk93tx1e",
  },
});
