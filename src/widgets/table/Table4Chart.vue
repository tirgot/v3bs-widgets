<template>
  <table>
    <thead>
      <th></th>
      <th v-for="y in datasets">
        {{ y.name }}
      </th>
    </thead>
    <tbody>
      <tr v-for="(x, k) in labels" :key="x">
        <td>{{ x }}</td>
        <td v-for="y in datasets" :class="(y.format == 'currency' ? 'text-right' : '')">
          <span v-if="'prefix' in y" v-bind:style="{color: ('color' in y ? y['color'] : '')}">{{ y.prefix }}</span>&nbsp;
          <span v-if="y.format == 'number'" v-bind:style="{color: ('color' in y ? y['color'] : '')}">{{ fmt_number(y.data[k]) }}</span>
          <span v-else-if="y.format == 'currency'" class="text-right" v-bind:style="{color: ('color' in y ? y['color'] : '')}">{{ fmt_currency(y.data[k]) }}</span>
          <span v-else-if="y.format == 'percentage'">{{ fmt_percentage(y.data[k]) }}</span>
          <span v-else>{{ y.data[k] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table4Chart',
  props: ['labels', 'datasets'],
  methods: {
    fmt_number: function (n){
      n = n.toString();
      n = n.split(/(?=(?:...)*$)/);
      // Convert the array to a string and format the output
      n = n.join(',');
      return n
      //return '$' + value;
    },
    fmt_percentage: function (n){
      return n + '%'
    },
    fmt_currency: function (n){
      return this.fmt_number(n)
    }
  }
}
</script>