// mautrix-manager - A web interface for managing bridges
// Copyright (C) 2020 Tulir Asokan
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { tryFetch } from "./tryGet.js"

const service = "Facebook bridge"

export const whoami = () => tryFetch("/api/mautrix-facebook/whoami", {}, {
    service,
    requestType: "user info",
})

export const logout = () => tryFetch("/api/mautrix-facebook/logout", { method: "POST" }, {
    service,
    requestType: "logout",
})

export const login = payload => tryFetch("/api/mautrix-facebook/login", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
        "Content-Type": "application/json",
    },
}, {
    service,
    requestType: "login",
})