let body = document.querySelector("#body");
const container = document.querySelector(".container");
const form = document.querySelector("#form");
const img = document.querySelector("#img");
const filmname = document.querySelector("#filmname");
const imdb = document.querySelector("#imdb");
const rejs = document.querySelector("#rejs");
const category = document.querySelector("#category");
const btn = document.getElementById("btn")
const Table = document.getElementById("Table")


btn.addEventListener("click",function (e) {
    e.preventDefault()
    const tr = document.createElement("tr")
    const FilmTh = document.createElement("th")
    const ImdbTh = document.createElement("th")
    const RejissorTh = document.createElement("th")
    const KateqoriyaTh = document.createElement("th")
    const imgTh = document.createElement("th")

    imgTh.textContent = "HESISENBERG"
    FilmTh.textContent = "Breaking Bad"
    ImdbTh.textContent = "10"
    RejissorTh.textContent = "Vince Gilligan"
    KateqoriyaTh.textContent = "Bilim kurgu"
    tr.append(imgTh,FilmTh,ImdbTh,RejissorTh,KateqoriyaTh,)
    Table.append(tr)
})












{
  /* <tr>
            <th>
              <img width="200px"
                src="https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_.jpg"
                alt=""
                srcset=""
              />
            </th>
            <th>Film adi</th>
            <th>Film imdb</th>
            <th>Rejissor</th>
            <th>Kateqoriya</th>
          </tr> */
}
