import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('data', () => {

    // NUMBER DATA
    
    const numberData = ref({
        datasets: [
            {
                title: 'Nieuwe marktaandeel',
                content: '15.25%',
                percentage: 5,
                time: 'in de afgelopen 5 dagen'
            },
            {
                title: 'Nieuwe boekingen',
                content: '10.8%',
                percentage: 29,
                time: 'in de afgelopen 5 dagen'
            },
            {
                title: 'Annulaties',
                content: '30%',
                percentage: -8,
                time: 'in de afgelopen 2 weken'
            },
            {
                title: 'Bezoekingen',
                content: '45.5%',
                percentage: 65,
                time: 'in de afgelopen week'
            }
        ]
    })


    // CHART DATA

    const optionsBar = ref({
        responsive: true,
        maintainAspectRatio: false
    })

    const dataBar = ref({
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        datasets: [
            {
                label: 'Alkmaar',
                backgroundColor: '#00C3FF',
                data: [20, 20, 12, 39, 10, 46, 39, 90, 40, 40, 12, 21]
            },
            {
                label: 'Apeldoorn',
                backgroundColor: '#5b60ff',
                data: [40, 15, 12, 39, 10, 30, 39, 80, 20, 20, 13, 11]
            }
        ]
    })

    const dataPie = ref({
        labels: ['Cosa', 'Van Derg', 'Haren', 'Naarm'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
          }
        ]
      })
      
    const optionsPie = ref({
        responsive: true,
        maintainAspectRatio: false
    })

    return { numberData, optionsBar, dataBar, dataPie, optionsPie }
})
