<template>
    <div class="d-flex">
        <v-text-field v-model="searchData" class="mr-3" style="min-width: 180px;" density="compact" variant="solo"
            label="Búsqueda" append-inner-icon="mdi-magnify" single-line hide-details></v-text-field>
    </div>
    <div class="d-flex">
        <v-menu v-model="openFilterMenu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ props }">
                <v-btn v-if="filters.length > 0" variant="tonal" class="primary-btn mr-3" prepend-icon="mdi-tune-variant"
                    v-bind="props">
                    Filtros
                    <span ref="filterMenu" class="filter-count" v-show="filtersSelected.length >= 0"> ({{
                    filtersSelected.length }})</span>
                </v-btn>
                <v-menu v-for="filter, index in  filters" :key="index" :value="index" :close-on-content-click="false"
                        collapse-icon=" mdi-chevron-up" expand-icon="mdi-chevron-down">
                        <!-- Filter name -->
                        
                        <template v-slot:activator="{ props }" :class="{ 'expanded': index === openedFilters }">
                            <v-list-item v-bind="props">
                                <span class="ml-5" style="font-weight: 450; font-size:12px !important;">{{
                                filter.name }}</span>
                            </v-list-item>
                        </template>
                        <div style="background-color: #ddf1ff !important; padding-bottom: 25px;">
                            <div class="ml-10 mr-5">
                                <template v-if="filter.type === 'number'">
                                    <v-form>
                                        <label class="label">{{ filter.name }}</label>
                                        <v-row>
                                            <v-col cols="6">
                                                <span>Mínimo</span>
                                                <v-text-field variant="solo" density="compact" type="number" label="Mínimo"
                                                single-line v-model="filter.selectedFilter.min"></v-text-field>
                                            </v-col>
                                            <v-col cols="6">
                                                <span>Máximo</span>
                                                <v-text-field variant="solo" density="compact" type="number" label="Máximo"
                                                single-line v-model="filter.selectedFilter.max"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                            <v-btn @click="applyFilter(filter)" class="apply-filter-button mr-3"
                                                size="x-small" color="primary" prepend-icon="mdi-plus">Aplicar
                                                filtro</v-btn>
                                        </v-row>
                                    </v-form>
                                    
                                </template>

                                <template v-if="filter.type === 'category'">
                                    <v-row v-for=" category, index  in  filter.categories " :key="index">
                                        <v-checkbox v-model="filter.selectedFilter.value" :label="category"
                                            :value="category"></v-checkbox>
                                        <!-- <LiquorTree :data="filters.categories" :options="filters.options" ref="tree" /> -->
                                    </v-row>
                                    <v-row class="justify-end">
                                        <v-btn @click="applyFilter(filter)" class="apply-filter-button mr-3"
                                            size="x-small" color="primary" prepend-icon="mdi-plus">Aplicar
                                            filtro</v-btn>
                                    </v-row>
                                </template>

                                <template v-if="filter.type === 'boolean'">
                                    <v-row>
                                        <v-checkbox :label="filter.name"
                                        v-model="filter.selectedFilter.true"></v-checkbox>
                                    </v-row>
                                    <v-row>
                                        <v-checkbox :label="`No ${filter.name}`"
                                        v-model="filter.selectedFilter.false"></v-checkbox>
                                    </v-row>
                                    <v-row class="justify-end">
                                        <v-btn @click="applyFilter(filter)" class="apply-filter-button mr-3"
                                            size="x-small" color="primary" prepend-icon="mdi-plus">Aplicar
                                            filtro</v-btn>
                                    </v-row>
                                </template>
                                
                                <template v-if="filter.type === 'hide'">
                                    <v-expansion-panel v-for="column, key in columnsShown"
                                    :key="column.value" :readonly="!column.filterable">
                                        <v-expansion-panel-header>
                                            <v-icon
                                                small
                                                left
                                                :disabled="column.required"
                                                :title="$t(eyeLabel(column.show))"
                                                @click.stop="toggleColumnVisibility(key)"
                                                >
                                                {{ column.show ? 'mdi-eye' : 'mdi-eye-off' }}
                                            </v-icon>
                                            {{ column.text }}
                                            <template v-slot:actions>
                                                <v-icon
                                                    v-if="column.filterable"
                                                    color="primary"
                                                    style="left: 90%; position: absolute; margin-top: -20px;"
                                                    >
                                                    $expand
                                                </v-icon>
                                            </template>
                                        </v-expansion-panel-header>
                                    </v-expansion-panel>
                                </template>

                                <template v-if="filter.type === 'unioption'">
                                    <v-row v-for=" unioption, index  in  filter.options " :key="index">
                                        <v-radio-group label="{{ filter.name }}">
                                            <v-radio v-model="filter.selectedFilter.value" :label="unioption"
                                            :value="unioption"></v-radio>
                                        </v-radio-group>
                                    </v-row>
                                    <v-row class="justify-end">
                                        <v-btn @click="applyFilter(filter)" class="apply-filter-button mr-3"
                                            size="x-small" color="primary" prepend-icon="mdi-plus">Aplicar
                                            filtro</v-btn>
                                    </v-row>
                                </template>
                                

                            </div>
                        </div>
                </v-menu>
            </template>
            
            <v-card ref="filterMenu" width="400" max-height="500">

                <!-- <v-list class="mr-5 ml-5 mt-5" density="compact">
                    <h4>Filtros activos</h4>
                    <v-list-item v-for="filterSelected, index in filtersSelected" :key="index">
                        <v-chip closable :key="filterSelected.id" @click:close.stop="deleteFilter(index)"
                            color="primary">{{filterSelected.text}}</v-chip>
                    </v-list-item>
                    <v-list-item v-show="filtersSelected.length === 0">
                        <span class="no-info">No hay filtros activos</span>
                    </v-list-item>
                </v-list> -->

                <v-divider></v-divider> 
                <v-list density="compact" v-model:opened="openedFilters">
                    <h4 class="ml-5">Filtros </h4>
                    <v-list-group v-for="filter, index in  filters " :key="index" :value="index"
                        collapse-icon=" mdi-chevron-up" expand-icon="mdi-chevron-down">
                        <!-- Filter name -->

                        <template v-slot:activator="{ props }" :class="{ 'expanded': index === openedFilters }">
                            <v-list-item v-bind="props">
                                <span class="ml-5" style="font-weight: 450; font-size:12px !important;">{{
                                filter.name }}</span>
                            </v-list-item>
                        </template>
                        <div style="background-color: #ddf1ff !important; padding-bottom: 25px;">
                            <div class="ml-10 mr-5">

                                <template v-if="filter.type === 'number'">
                                    <v-row>
                                        <v-col cols="8">
                                            <v-select
                                                :items="[{ text: 'Mayor que', value: 'gt' }, { text: 'Menor que', value: 'lt' }, { text: 'Igual a', value: 'eq' }]"
                                                label="Seleccione" item-title="text" item-value="value" variant="solo"
                                                density="compact" v-model="filter.selectedFilter.option" single-line
                                                hide-details></v-select>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field variant="solo" density="compact" type="number" label="Número"
                                                single-line v-model="filter.selectedFilter.value"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="justify-end">
                                        <v-btn @click="applyFilter(filter)" class="apply-filter-button mr-3"
                                            size="x-small" color="primary" prepend-icon="mdi-plus">Aplicar
                                            filtro</v-btn>
                                    </v-row>
                                </template>

                                <template v-if="filter.type === 'category'">
                                    <v-row v-for=" category, index  in  filter.categories " :key="index">
                                        <v-checkbox v-model="filter.selectedFilter.value" :label="category"
                                            :value="category"></v-checkbox>
                                    </v-row>
                                    <v-row class="justify-end">
                                        <v-btn @click="applyFilter(filter)" class="apply-filter-button mr-3"
                                            size="x-small" color="primary" prepend-icon="mdi-plus">Aplicar
                                            filtro</v-btn>
                                    </v-row>
                                </template>

                                <template v-if="filter.type === 'boolean'">
                                    <v-row>
                                        <v-checkbox :label="filter.name"
                                            v-model="filter.selectedFilter.value"></v-checkbox>
                                    </v-row>
                                    <v-row class="justify-end">
                                        <v-btn @click="applyFilter(filter)" class="apply-filter-button mr-3"
                                            size="x-small" color="primary" prepend-icon="mdi-plus">Aplicar
                                            filtro</v-btn>
                                    </v-row>
                                </template>

                                <template v-if="filter.type === 'date'">
                                    <v-row>
                                        <v-col cols="6">
                                            <span>Fecha de inicio</span>
                                            <v-date-picker v-model="filter.selectedFilter.start"
                                                label="Fecha inicio"></v-date-picker>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="6">
                                            <span>Fecha de fin</span>
                                            <v-date-picker v-model="filter.selectedFilter.end"
                                                label="Fecha fin"></v-date-picker>
                                        </v-col>
                                    </v-row>
                                    <v-row class="justify-end">
                                        <v-btn @click="applyFilter(filter)" class="apply-filter-button mr-3"
                                            size="x-small" color="primary" prepend-icon="mdi-plus">Aplicar
                                            filtro</v-btn>
                                    </v-row>
                                </template>
                            </div>
                        </div>
                    </v-list-group>
                    <v-list-item v-show="filters.length === 0">
                        <span class="no-info">No hay filtros</span>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
import LiquorTree from "liquor-tree";

export default {
    name: 'SearchAndFilterForTables',
    props: {
        filters: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            searchData: '',
            openFilterMenu: false,
            filtersSelected: [],
            openedFilters: [],
        };
    },
    methods: {
        applyFilter(filter) {
            let selectedFilter = { id: Date.now(), value: '', text: '' };
            switch (filter.type) {
                case 'number':
                    const minValue = parseFloat (filter.selectedFilter.min);
                    const maxValue = parseFloat (filter.selectedFilter.max);

                    if (!isNaN(minValue) && !isNaN (maxValue)) {
                        const numbersInRange = [];
                        if (minValue <= maxValue) {
                            for (let num=minValue; num <= maxValue; num++) {
                                numbersInRange.push(num);
                            }
                        } else {
                            console.warn ("El valor mínimo es mayor que el valor máximo. Por favor ajuste los valores");
                        }
                    }
                    break;
                case 'category':
                    selectedFilter.text = `${filter.name} igual a ${filter.selectedFilter.value}`;
                    break;
                case 'boolean':
                    selectedFilter.text = `${filter.selectedFilter.value ? 'Sí' : 'No'} ${filter.name.toLowerCase()}`;
                    break;
                case 'date':
                    const formattedStart = new Date(filter.selectedFilter.start).toLocaleDateString('es', { day: '2-digit', month: '2-digit', year: 'numeric' })
                    const formattedEnd = new Date(filter.selectedFilter.end).toLocaleDateString('es', { day: '2-digit', month: '2-digit', year: 'numeric' })
                    selectedFilter.text = `${filter.name}: ${formattedStart} - ${formattedEnd}`;
                    break;
            }
            selectedFilter.value = { ...filter };

            this.filtersSelected.push(selectedFilter);

            this.$emit('filter', this.filtersSelected);
            this.openedFilters = this.openedFilters.filter(i => i !== this.filters.indexOf(filter));
            this.resetFilter();

            setTimeout(() => {
                const filterMenu = this.$refs.filterMenu;
                if (filterMenu.$el) {
                    filterMenu.$el.scrollTop = 0;
                }
            }, 0.5);
        },
        deleteFilter(index) {
            this.filtersSelected = this.filtersSelected.filter((_, i) => i !== index);
            this.$emit('filter', this.filtersSelected);
        },
        resetFilter() {
            this.filters.forEach(filter => {
                if (filter.type === 'number') {
                    filter.selectedFilter = { option: '', value: '' };
                } else if (filter.type === 'category') {
                    filter.selectedFilter = { value: [] };
                } else if (filter.type === 'boolean') {
                    filter.selectedFilter = { value: false };
                } else if (filter.type === 'date') {
                    filter.selectedFilter = { start: '', end: '' };
                }
            });
        },

        // removeNumberArrows() {
        //     // Removes number input spinner arrows
        //     const input = this.$refs.minInput.$el.querySelector('input');
        //     input.setAttribute('inputmode', 'numeric');
        //     input.style.appearance = 'textfield';
        // }
    },
    watch: {
        searchData() {
            this.$emit('search', this.searchData);
        },
    },
};
</script>

<style scoped>
::v-deep .v-text-field label {
    color: var(--color-text-disabled) !important;
    font-weight: 400 !important;
}

::v-deep .v-input__control {
    height: 35px !important;
}

::v-deep .v-field__input {
    margin-top: -4px !important;
}

.apply-filter-button {
    margin-top: -20px !important
}

::v-deep .v-list-group--open {
    background-color: #ddf1ff !important;
}

.filter-count {
    display: inline-block;
    background-color: var(--color-bg-canvas);
    color: var(--color-text);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    margin-left: 5px;
    font-size: 11px;
}
</style>