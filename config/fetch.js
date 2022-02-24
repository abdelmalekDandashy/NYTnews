/* eslint-disable prettier/prettier */
export class Proxy {
  constructor() {
    this.APIBaseUrl = 'http://localhost:3000/api/Data';
    this.url = '';
    this.Ticket = '';
    this.TicketMode = 'header';
  }
  api(url) {
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  apiPost(url, data) {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        ticket: this.Ticket,
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  async Get_Table_By_OWNER_ID(i_Params_Get_Table_By_OWNER_ID) {
    this.url =
      this.APIBaseUrl +
      '/Get_Table_By_OWNER_ID?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    console.log(this.url);
    const result = await this.apiPost(
      this.url,
      i_Params_Get_Table_By_OWNER_ID,
    ).then(async resp => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_DEPO_By_OWNER_ID(i_Params_Get_Table_By_OWNER_ID) {
    this.url =
      this.APIBaseUrl +
      '/Get_Depo_By_OWNER_ID?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    console.log(this.url);
    const result = await this.apiPost(
      this.url,
      i_Params_Get_Table_By_OWNER_ID,
    ).then(async resp => {
      return resp;
    });
    return result;
  }

  async Edit_Tables(i_Table) {
    this.url =
      this.APIBaseUrl +
      '/Edit_Tables?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Table).then(async resp => {
      return resp;
    });
    return result;
  }
  async Delete_Tables(i_Params_Delete_Tables) {
    this.url =
      this.APIBaseUrl +
      '/Delete_Tables?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Delete_Tables).then(
      async resp => {
        return resp;
      },
    );
    return result.any;
  }
  async Get_Extension_By_OWNER_ID(i_Params_Get_Extension_By_OWNER_ID) {
    this.url =
      this.APIBaseUrl +
      '/Get_Extension_By_OWNER_ID?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(
      this.url,
      i_Params_Get_Extension_By_OWNER_ID,
    ).then(async resp => {
      return resp;
    });
    return result.My_Result;
  }
  async Edit_Extension(i_Extension) {
    this.url =
      this.APIBaseUrl +
      '/Edit_Extension?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Extension).then(
      async resp => {
        return resp;
      },
    );
    return result.My_Extension;
  }
  async Get_User_By_USER_ID(i_Params_Get_User_By_USER_ID) {
    this.url =
      this.APIBaseUrl +
      '/Get_User_By_USER_ID?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(
      this.url,
      i_Params_Get_User_By_USER_ID,
    ).then(async resp => {
      return resp;
    });
    return result.My_Result;
  }
  async Get_User_By_OWNER_ID(i_Params_Get_User_By_OWNER_ID) {
    this.url =
      this.APIBaseUrl +
      '/Get_User_By_OWNER_ID?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(
      this.url,
      i_Params_Get_User_By_OWNER_ID,
    ).then(async resp => {
      return resp;
    });
    return result.My_Result;
  }
  async Delete_User(i_Params_Delete_User) {
    this.url =
      this.APIBaseUrl +
      '/Delete_User?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Delete_User).then(
      async resp => {
        return resp;
      },
    );
    return result.any;
  }
  async Edit_User(i_User) {
    this.url =
      this.APIBaseUrl +
      '/Edit_User?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_User).then(async resp => {
      return resp;
    });
    return result.My_User;
  }
  async Authenticate(i_Params_Authenticate) {
    this.url =
      this.APIBaseUrl +
      '/Authenticate?Ticket=' +
      (this.TicketMode === 'url' ? this.Ticket : '');
    const result = await this.apiPost(this.url, i_Params_Authenticate).then(
      async resp => {
        return resp;
      },
    );
    return result;
  }
}
export class Params_Get_Table_By_OWNER_ID {}
export class Table {}
export class Params_Delete_Tables {}
export class Params_Get_Extension_By_OWNER_ID {}
export class Extension {}
export class Params_Get_User_By_USER_ID {}
export class User {}
export class Params_Get_User_By_OWNER_ID {}
export class Params_Delete_User {}
export class Params_Authenticate {}
export class Action_Result {}
export class Result_Get_Table_By_OWNER_ID extends Action_Result {}
export class Result_Edit_Table extends Action_Result {}
export class Result_Delete_Tables extends Action_Result {}
export class Result_Get_Extension_By_OWNER_ID extends Action_Result {}
export class Result_Edit_Extension extends Action_Result {}
export class Result_Get_User_By_USER_ID extends Action_Result {}
export class Result_Get_User_By_OWNER_ID extends Action_Result {}
export class Result_Delete_User extends Action_Result {}
export class Result_Edit_User extends Action_Result {}
export class Result_Authenticate extends Action_Result {}
