<template>
    <h5 class="uk-heading-line uk-text-uppercase uk-margin-remove-top"><span>D6 - Simple Generator</span></h5>

    <div class="uk-card uk-card-default uk-width-1-1">
        <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                    <img class="uk-border-circle" width="40" height="40" :src="`/img/creature/${creatureSimple.type}.png`"
                        alt="Avatar">
                </div>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">
                        <span v-if="creatureSimple.type <= 2">Robot \ Non Organic</span>
                        <span v-else-if="creatureSimple.type > 2 && creatureSimple.type <= 4">Organic</span>
                        <span v-else>Human \ Vehicle</span>
                    </h3>
                    <p class="uk-text-meta uk-margin-remove-top">Random: {{ creatureSimple.type }}</p>
                </div>
            </div>
        </div>
        <div class="uk-card-body">
            <p class="uk-text-capitalize uk-margin-remove-bottom uk-margin-small-top"><b>Number of Limbs/Wheels:</b> {{ creatureSimple.limbs }}</p>
            <p class="uk-text-capitalize uk-margin-remove-bottom uk-margin-small-top"><b>Number of Weapons</b> {{ creatureSimple.weapons }}</p>
            <p class="uk-text-capitalize uk-margin-remove-bottom uk-margin-small-top"><b>Number of Eyes</b> {{ creatureSimple.eyes }}</p>
        </div>
        <div class="uk-card-footer">
            <a @click="generateSimpleCreature" class="uk-button uk-button-text">Generate Random Beast</a>
        </div>
    </div>

    <h5 class="uk-heading-line uk-text-uppercase"><span>D20 - BotBash Generator</span></h5>

    <div class="uk-card uk-card-default uk-width-1-1">
        <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                    <img class="uk-border-circle" width="40" height="40" :src="`/img/creature/0.png`"
                        alt="Avatar">
                </div>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom uk-text-capitalize">
                        {{ creatureComplex.flavour }}
                    </h3>
                    <p class="uk-text-meta uk-margin-remove-top">Flavour</p>
                </div>
            </div>
        </div>
        <div class="uk-card-body">
            <p class="uk-text-capitalize uk-margin-remove-bottom uk-margin-small-top"><b>Body</b> {{ creatureComplex.body }}</p>
            <p class="uk-text-capitalize uk-margin-remove-bottom uk-margin-small-top"><b>Head</b> {{ creatureComplex.head }}</p>
            <p class="uk-text-capitalize uk-margin-remove-bottom uk-margin-small-top"><b>Arms</b> {{ creatureComplex.arms }}</p>
            <p class="uk-text-capitalize uk-margin-remove-bottom uk-margin-small-top"><b>Hands</b> {{ creatureComplex.hands }}</p>
            <p class="uk-text-capitalize uk-margin-remove-bottom uk-margin-small-top"><b>Legs</b> {{ creatureComplex.legs }}</p>
        </div>
        <div class="uk-card-footer">
            <a @click="generateComplexCreature" class="uk-button uk-button-text">Generate Random Bot</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Generate Creature",
    data() {
        return {
            title: 'Generate Creature',
            creatureSimple: {
                type: 0,
                limbs: 0,
                weapons: 0,
                eyes: 0,
            },
            creatureComplex: {
                body: '',
                head: '',
                arms: '',
                hands: '',
                legs: '',
                flavour: '',
            },
            botData: {
                body: [
                    'belly-full',
                    'missing parts',
                    'skewered',
                    'shoud it be leaking',
                    'brick shithouse',
                    'rustgod',
                    'heavy smoker',
                    'big boned',
                    'beanpole',
                    'alien',
                    'rivetin',
                    'too many wires',
                    'giger',
                    'seen better days',
                    'carapaced',
                    'all chrome and shiny',
                    'spikes',
                    'all dressed up',
                    'speed holes',
                    'death',
                ],
                head: [
                    'Lockjaw',
                    '3x3 eyes',
                    'cute n round',
                    'googly',
                    'hole',
                    'grinder',
                    'it doesn\'t look right',
                    'mandibles',
                    'cyclopian',
                    'fish bowl',
                    'he looks dangerous',
                    'sees all',
                    'broken',
                    'looking good',
                    'spikey',
                    'bad breath',
                    'hot',
                    'scary',
                    'bones',
                    'god-like',
                ],
                arms: [
                    'beefy',
                    'hydraulic',
                    'extras',
                    'probably too long',
                    'stubby',
                    'noodle',
                    'one armed bandit',
                    'knucke dragger',
                    'mr tickle',
                    'double jointed',
                    'too many',
                    'triple jointed',
                    'fancypants',
                    'pistons',
                    'long + thin',
                    'armoured',
                    'missmatched',
                    'spider-like',
                    'wired',
                    'war machine',
                ],
                hands: [
                    'hands are hard',
                    'claws are easy',
                    'buzzzzzz',
                    'take an eye out with that',
                    'kaboom',
                    'grip',
                    'barbed',
                    'up yours',
                    'what a knockout',
                    'giggun',
                    'scorcher',
                    'electric',
                    'hook',
                    'two handed',
                    'buster',
                    'calamari',
                    'knuckles',
                    'creepy',
                    'old witch hands',
                    'guns',
                ],
                legs: [
                    'nice pins',
                    'leg dat',
                    'spidey',
                    'tank tracks',
                    'ballerina',
                    'quadropod',
                    'tri-pod',
                    'who needs legs',
                    'centaur',
                    'sticks',
                    'dash',
                    'stumpy',
                    'they call me wheels',
                    'centipede',
                    'bones',
                    'weak',
                    'pistons',
                    'daddy long',
                    'triple jointed',
                    'backwards',
                ],
                flavour: [
                    'rusty',
                    'polished',
                    'ronin',
                    'beaten',
                    'mouldy',
                    'savage',
                    'holy',
                    'evil',
                    'too many spikes',
                    'jagged',
                    'soft',
                    'sleek',
                    'unlucky',
                    'dirty',
                    'cosmic',
                    'weirdo',
                    'cutey',
                    'asymetrical',
                    'killing machine',
                    'is that meat?',
                ]

            }
        }
    },
    components: {},
    methods: {
        generateSimpleCreature() {
            this.creatureSimple.type = this.genRandInt(6);
            this.creatureSimple.limbs = this.genRandInt(6);
            this.creatureSimple.weapons = this.genRandInt(6);
            this.creatureSimple.eyes = this.genRandInt(6);
        },
        generateComplexCreature() {
            this.creatureComplex.body = this.botData.body[this.genRandInt(20)];
            this.creatureComplex.head = this.botData.head[this.genRandInt(20)];
            this.creatureComplex.arms = this.botData.arms[this.genRandInt(20)];
            this.creatureComplex.hands = this.botData.hands[this.genRandInt(20)];
            this.creatureComplex.legs = this.botData.legs[this.genRandInt(20)];
            this.creatureComplex.flavour = this.botData.flavour[this.genRandInt(20)];
        },
        genRandInt(faces) {
            return Math.floor(Math.random() * faces) + 1
        }
    },
};
</script>