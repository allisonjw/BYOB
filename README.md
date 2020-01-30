## BYOB(Build Your Own Backend)

[Allison Wagner](https://github.com/allisonjw)

---

### Bands API Endpoints:

<details><summary>Full Details</summary>

<table>
  <thead>
    <tr>
      <th>Purpose</th>
      <th>URL</th>
      <th>Verb</th>
      <th>Request Body</th>
      <th>Sample Response (Happy Path)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Get all bands</td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/bands</code></td>
      <td>GET</td>
      <td>N/A</td>
      <td><code class="language-plaintext highlighter-rouge"> {
        "id": 1122,
        "band": "Backstreet Boys",
        "highest_song": "Quit Playing Games with my Heart",
        "featuring_artist": "no",
        "highest_song_vid": "https://www.youtube.com/watch?v=Ug88HO2mg44",
        "created_at": "2020-01-30T21:28:16.636Z",
        "updated_at": "2020-01-30T21:28:16.636Z",
        "band_id": null
    },
    {
        "id": 1130,
        "band": "Brother Beyond",
        "highest_song": "The Girl I Used to Know",
        "featuring_artist": "no",
        "highest_song_vid": "https://www.youtube.com/watch?v=pS-E_lPE668",
        "created_at": "2020-01-30T21:28:16.641Z",
        "updated_at": "2020-01-30T21:28:16.641Z",
        "band_id": null
    }, ...]}</code></td>
    </tr>
    <tr>
      <td>Get band by id: </td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/bands/:id/</code></td>
      <td>GET</td>
      <td>N/A</td>
      <td><code class="language-plaintext highlighter-rouge">{
        "id": 1115,
        "band": "112",
        "highest_song": "Peaches And Cream",
        "featuring_artist": "no",
        "highest_song_vid": "https://www.youtube.com/watch?v=wl2NCXzg1FQ",
        "created_at": "2020-01-30T21:28:16.627Z",
        "updated_at": "2020-01-30T21:28:16.627Z",
        "band_id": null}</code></td>
    </tr>
    <tr>
      <td>Submit a new band</td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/bands</code></td>
      <td>POST</td>
      <td><code class="language-plaintext highlighter-rouge">{ band: &lt;String&gt;, highest_song: &lt;String&gt;, featuring_artist: &lt;String&gt;, highest_song_vid: &lt;String&gt; }</code></td>
      <td><code class="language-plaintext highlighter-rouge">{
        "id": 1121,
        "band": "Aventura",
        "highest_song": "Ella Y Yo",
        "featuring_artist": "yes",
        "highest_song_vid": "https://www.youtube.com/watch?v=EZodgl2JiDA",
        "created_at": "2020-01-30T21:28:16.633Z",
        "updated_at": "2020-01-30T21:28:16.633Z",
        "band_id": null
    }</code></td>
    </tr>
    <tr>
      <td>Delete an existing band based on id</td>
      <td><code class="language-plaintext highlighter-rouge">api/v1/bands/:id/</code></td>
      <td>DELETE</td>
      <td>N/A</td>
      <td>204 status code (NO CONTENT in response body)</td>
    </tr>
  </tbody>
</table>

</details>

---


### Members API Endpoints:

<details><summary>Full Details</summary>

<table>
  <thead>
    <tr>
      <th>Purpose</th>
      <th>URL</th>
      <th>Verb</th>
      <th>Request Body</th>
      <th>Sample Response (Happy Path)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Get all members</td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/members</code></td>
      <td>GET</td>
      <td>N/A</td>
      <td><code class="language-plaintext highlighter-rouge"> {
        "band": "Shai",
        "id": 1896,
        "name": "Carl Martin",
        "dob": "8/29/1970",
        "hair_color": "black",
        "eyes": "brown",
        "bandsId": null,
        "created_at": "2020-01-30T21:29:57.611Z",
        "updated_at": "2020-01-30T21:29:57.611Z"
    },
    {
        "band": "Color Me Badd",
        "id": 1902,
        "name": "Kevin Thornton",
        "dob": "6/17/1969",
        "hair_color": "black",
        "eyes": "brown",
        "bandsId": null,
        "created_at": "2020-01-30T21:29:57.613Z",
        "updated_at": "2020-01-30T21:29:57.613Z"
    }, ...]}</code></td>
    </tr>
    <tr>
      <td>Get member by id: </td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/members/:id/</code></td>
      <td>GET</td>
      <td>N/A</td>
      <td><code class="language-plaintext highlighter-rouge">{
        "band": "Hanson",
        "id": 1906,
        "name": "Zac Hanson",
        "dob": "10/22/1985",
        "hair_color": "blonde",
        "eyes": "brown",
        "bandsId": null,
        "created_at": "2020-01-30T21:29:57.615Z",
        "updated_at": "2020-01-30T21:29:57.615Z"
    }</code></td>
    </tr>
    <tr>
      <td>Submit a new member</td>
      <td><code class="language-plaintext highlighter-rouge">/api/v1/members</code></td>
      <td>POST</td>
      <td><code class="language-plaintext highlighter-rouge">{ band: &lt;String&gt;, name: &lt;String&gt;, dob: &lt;String&gt;, hair_color: &lt;String&gt;, eyes: &lt;String&gt; }</code></td>
      <td><code class="language-plaintext highlighter-rouge">{
        "band": "One Direction",
        "id": 1916,
        "name": "Harry Styles",
        "dob": "2/1/1994",
        "hair_color": "brown",
        "eyes": "green",
        "bandsId": null,
        "created_at": "2020-01-30T21:29:57.619Z",
        "updated_at": "2020-01-30T21:29:57.619Z"
    }</code></td>
    </tr>
    <tr>
      <td>Delete an existing member based on id</td>
      <td><code class="language-plaintext highlighter-rouge">api/v1/members/:id/</code></td>
      <td>DELETE</td>
      <td>N/A</td>
      <td>204 status code (NO CONTENT in response body)</td>
    </tr>
  </tbody>
</table>

</details>

---
