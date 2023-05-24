function addDepart() {
  console.log('출발지 설정');
  const marker_depart = document.querySelector('#marker_name');
  const depart_input = document.getElementById('depart_place')

  let markers_etc = window.global_etc
  let markers_ambulance = window.global_ambulance
  let markers_charger = window.global_charger
  let markers_library = window.global_library
  let markers_residue = window.global_residue
  let markers_medical = window.global_medical

  if (search_depart_marker != []) {
    search_depart_marker = []
  }

  for (let i = 0; i < markers_library.length; i++) {
    let marker = markers_library[i];
    if (marker_depart.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const depart = marker.getPosition(); // depart에 값 할당
      depart_input.value = marker_depart.textContent
      search_depart_marker.push(marker.Gb)
      search_depart_marker.push(depart)
      console.log(search_depart_marker)
    }
  }
  for (let i = 0; i < markers_etc.length; i++) {
    let marker = markers_etc[i];
    if (marker_depart.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const depart = marker.getPosition(); // depart에 값 할당
      depart_input.value = marker_depart.textContent
      search_depart_marker.push(marker.Gb)
      search_depart_marker.push(depart)
      console.log(search_depart_marker)
    }
  }
  for (let i = 0; i < markers_ambulance.length; i++) {
    let marker = markers_ambulance[i];
    if (marker_depart.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const depart = marker.getPosition(); // depart에 값 할당
      depart_input.value = marker_depart.textContent
      search_depart_marker.push(marker.Gb)
      search_depart_marker.push(depart)
      console.log(search_depart_marker)
    }
  }
  for (let i = 0; i < markers_charger.length; i++) {
    let marker = markers_charger[i];
    if (marker_depart.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const depart = marker.getPosition(); // depart에 값 할당
      depart_input.value = marker_depart.textContent
      search_depart_marker.push(marker.Gb)
      search_depart_marker.push(depart)
      console.log(search_depart_marker)
    }
  }
  for (let i = 0; i < markers_residue.length; i++) {
    let marker = markers_residue[i];
    if (marker_depart.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const depart = marker.getPosition(); // depart에 값 할당
      depart_input.value = marker_depart.textContent
      search_depart_marker.push(marker.Gb)
      search_depart_marker.push(depart)
      console.log(search_depart_marker)
    }
  }
  for (let i = 0; i < markers_medical.length; i++) {
    let marker = markers_medical[i];
    if (marker_depart.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const depart = marker.getPosition(); // depart에 값 할당
      depart_input.value = marker_depart.textContent
      search_depart_marker.push(marker.Gb)
      search_depart_marker.push(depart)
      console.log(search_depart_marker)
    }
  }

  const depart_button = document.getElementById('place_depart')
  if (depart_button !== null) {
    depart_button.value = search_depart_marker[0]
  }
  const depart_button_1 = document.getElementById('departure_place')
  if (depart_button_1 !== null) {
    depart_button_1.value = search_depart_marker[0]
  }


  window.marker_search_depart = search_depart_marker
}


function addArrive() {
  console.log('도착지 설정');
  const marker_arrive = document.querySelector('#marker_name');
  const arrive_input = document.getElementById('arrive_place')

  let markers_etc = window.global_etc
  let markers_ambulance = window.global_ambulance
  let markers_charger = window.global_charger
  let markers_library = window.global_library
  let markers_residue = window.global_residue
  let markers_medical = window.global_medical

  if (search_arrive_marker != []) {
    search_arrive_marker = []
  }
  for (let i = 0; i < markers_library.length; i++) {
    let marker = markers_library[i];
    if (marker_arrive.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const arrive = marker.getPosition(); // depart에 값 할당
      arrive_input.value = marker_arrive.textContent
      search_arrive_marker.push(marker.Gb)
      search_arrive_marker.push(arrive)
      console.log(search_arrive_marker)
    }
  }
  for (let i = 0; i < markers_etc.length; i++) {
    let marker = markers_etc[i];
    if (marker_arrive.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const arrive = marker.getPosition(); // depart에 값 할당
      arrive_input.value = marker_arrive.textContent
      search_arrive_marker.push(marker.Gb)
      search_arrive_marker.push(arrive)
      console.log(search_arrive_marker)
    }
  }
  for (let i = 0; i < markers_ambulance.length; i++) {
    let marker = markers_ambulance[i];
    if (marker_arrive.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const arrive = marker.getPosition(); // depart에 값 할당
      arrive_input.value = marker_arrive.textContent
      search_arrive_marker.push(marker.Gb)
      search_arrive_marker.push(arrive)
      console.log(search_arrive_marker)
    }
  }
  for (let i = 0; i < markers_charger.length; i++) {
    let marker = markers_charger[i];
    if (marker_arrive.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const arrive = marker.getPosition(); // depart에 값 할당
      arrive_input.value = marker_arrive.textContent
      search_arrive_marker.push(marker.Gb)
      search_arrive_marker.push(arrive)
      console.log(search_arrive_marker)
    }
  }
  for (let i = 0; i < markers_residue.length; i++) {
    let marker = markers_residue[i];
    if (marker_arrive.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const arrive = marker.getPosition(); // depart에 값 할당
      arrive_input.value = marker_arrive.textContent
      search_arrive_marker.push(marker.Gb)
      search_arrive_marker.push(arrive)
      console.log(search_arrive_marker)
    }
  }
  for (let i = 0; i < markers_medical.length; i++) {
    let marker = markers_medical[i];
    if (marker_arrive.textContent == marker.Gb) {
      // window.location.href = '../find_road/test.html';
      const arrive = marker.getPosition(); // depart에 값 할당
      arrive_input.value = marker_arrive.textContent
      search_arrive_marker.push(marker.Gb)
      search_arrive_marker.push(arrive)
      console.log(search_arrive_marker)
    }
  }

  const arrive_button = document.getElementById('place_arrive')
  if (arrive_button !== null) {
    arrive_button.value = search_arrive_marker[0]
  }
  const arrive_button_1 = document.getElementById('arrival_place')
  if (arrive_button_1 !== null) {
    arrive_button_1.value = search_arrive_marker[0]
  }

  window.marker_search_arrive = search_arrive_marker
}
