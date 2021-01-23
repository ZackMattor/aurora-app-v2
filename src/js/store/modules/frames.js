import Vue from 'vue';

export default {
  namespaced: true,

  state: () => ({
    all: [{
      id: 0,
      geometry: 'icosahedron',
      data: [{ r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }],
    }, {
      id: 1,
      geometry: 'icosahedron',
      data: [{ r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 1 }],
    }, {
      id: 3,
      geometry: 'icosahedron',
      data: [{ r:0.14397251791260413,g:0.8003095657851673,b:0.06620669028947401 } , { r:0.2674573177565003,g:0.3798197757879149,b:0.3151945424966629 } , { r:0.6736614247752428,g:0.05205845161669109,b:0.1753634874520409 } , { r:0.31714265818208376,g:0.5403630693942383,b:0.9748450680242999 } , { r:0.26140966322019277,g:0.34123896632808015,b:0.5173088991405188 } , { r:0.7943797225182538,g:0.08393482598833679,b:0.5505797056577904 } , { r:0.4451329598568714,g:0.9413653677254241,b:0.024661961639299568 } , { r:0.6660124495735784,g:0.7924758675218389,b:0.26552905298375373 } , { r:0.4504907105385596,g:0.8550189632377407,b:0.7289010375548692 } , { r:0.8860225093843104,g:0.9555180877648892,b:0.4467663038845411 } , { r:0.9642468020814479,g:0.6667076564240093,b:0.174115829590493 } , { r:0.9559327897291132,g:0.9621458269639649,b:0.6215276261416189 } , { r:0.09962873944129336,g:0.20071550737975463,b:0.7311769210740509 } , { r:0.22898050529020342,g:0.8189367428813639,b:0.7358999659047978 } , { r:0.17969814118738903,g:0.09105867388385103,b:0.515460935759722 } , { r:0.09309524457783169,g:0.7099710860653099,b:0.9551022455934286 } , { r:0.18738179594469284,g:0.9171012871640842,b:0.2969765110058449 } , { r:0.8629605146910033,g:0.9431672550844992,b:0.9604271465341969 } , { r:0.3615458422057405,g:0.6503954007363122,b:0.0672520302341888 } , { r:0.3746991047430708,g:0.8222312464616994,b:0.007924981224057825 }],
    }, {
      id: 4,
      geometry: 'icosahedron',
      data: [{ r:0.9471445729108465,g:0.5997409221504357,b:0.28611470889594015 } , { r:0.5453173346755609,g:0.8890400087684309,b:0.3098792020859982 } , { r:0.9416300494974816,g:0.27728306904974476,b:0.5769605805421982 } , { r:0.41712078430227173,g:0.6747664612610096,b:0.32683200662395895 } , { r:0.34359367605704905,g:0.47530513906366934,b:0.10543062754333432 } , { r:0.3674087810189324,g:0.105194731668524,b:0.47556713100934744 } , { r:0.5464706312441239,g:0.9424576773875133,b:0.8614913998955696 } , { r:0.1993187809289596,g:0.11549281427259461,b:0.3463502480810694 } , { r:0.9924156345447765,g:0.32318329256835265,b:0.4688079155481366 } , { r:0.21606649362342423,g:0.5263265119549176,b:0.9963587890314463 } , { r:0.7462205619748972,g:0.5950316005815672,b:0.5647129676265681 } , { r:0.3323489864527298,g:0.40291448059872614,b:0.9543421000679433 } , { r:0.6668850452735398,g:0.2577148820538224,b:0.8075791774255641 } , { r:0.2742775424618631,g:0.7879302805504766,b:0.9850894751367889 } , { r:0.12649394105196676,g:0.06559238420957647,b:0.8423446300598425 } , { r:0.09268424698354094,g:0.45710059493496424,b:0.6214723576091674 } , { r:0.38978940706338006,g:0.09074520129547126,b:0.9400565048374552 } , { r:0.10257446666715575,g:0.43583113209580326,b:0.07762782557916226 } , { r:0.6123933645580601,g:0.7377648594643542,b:0.6109907312531175 } , { r:0.7949467800617263,g:0.8184075981466803,b:0.9011975511500911 }],
    }, {
      id: 5,
      geometry: 'icosahedron',
      data: [{ r:0.1655221391622541,g:0.972374774265865,b:0.9951548783286912 } , { r:0.2857631812952408,g:0.7337160167248074,b:0.6046145447679336 } , { r:0.3569299551946199,g:0.3991287535662571,b:0.5761234378701534 } , { r:0.6225843924045498,g:0.9571255413380322,b:0.7083089198933092 } , { r:0.27615022980261195,g:0.8274427802266477,b:0.4710949575444734 } , { r:0.983244576024564,g:0.8354674981914376,b:0.614860618114665 } , { r:0.44530048662569643,g:0.42438656102666705,b:0.17901959296361003 } , { r:0.7067177247298575,g:0.905548989272658,b:0.42699828672373585 } , { r:0.33613739747773086,g:0.9244270137969142,b:0.2277666930541533 } , { r:0.8395117521349804,g:0.6783855264330887,b:0.043158941110689186 } , { r:0.21741277773767864,g:0.44909409355728513,b:0.7201180444209068 } , { r:0.7149129499059574,g:0.5389449031306663,b:0.18375409485883076 } , { r:0.6746349382564907,g:0.40786241546362634,b:0.4763261960718721 } , { r:0.5868080293879347,g:0.714553040054021,b:0.5204835710674636 } , { r:0.33612148737038416,g:0.5073742060072324,b:0.46166808984846575 } , { r:0.48568994347250105,g:0.43849009006438777,b:0.10847009337609737 } , { r:0.031320856652668594,g:0.556143953289252,b:0.45419573137359537 } , { r:0.8755912902995957,g:0.05769093085192556,b:0.47410137566628907 } , { r:0.18903139605759556,g:0.16896216686990284,b:0.4093254152335759 } , { r:0.7322450843582688,g:0.39392289118709933,b:0.6309321514143253 }],
    }, {
      id: 6,
      geometry: 'icosahedron',
      data: [{ r:0.25547672848732295,g:0.9887986513414084,b:0.4756757940680909 } , { r:0.20388575682149246,g:0.9094053084169738,b:0.10709354634496915 } , { r:0.6440439630621009,g:0.2990890681306635,b:0.9113264089643094 } , { r:0.01784904361598505,g:0.3097745937127805,b:0.5452620686461136 } , { r:0.18537198551305312,g:0.0911601426575237,b:0.6509117626136998 } , { r:0.8306540722578877,g:0.21885803807654947,b:0.5923241949646108 } , { r:0.4804286758163856,g:0.244262197914056,b:0.9051280784423417 } , { r:0.8218554311115178,g:0.03005518875363511,b:0.3619216128465974 } , { r:0.09441664965705177,g:0.8145120833335893,b:0.4899464499997679 } , { r:0.6924461259814945,g:0.27732247619129047,b:0.26798793073997373 } , { r:0.9910455941306442,g:0.5076972510866842,b:0.9409101663952169 } , { r:0.8099583082336801,g:0.5896075561004945,b:0.7060959252620975 } , { r:0.6395971186257492,g:0.5946073007184247,b:0.4829880297794167 } , { r:0.1591841929422333,g:0.13782685258392946,b:0.22213389879667633 } , { r:0.9687546359293329,g:0.8996669233556227,b:0.5718806442857094 } , { r:0.8281250746047999,g:0.9051633634920655,b:0.5229141369443548 } , { r:0.08544152589858678,g:0.8784196902462993,b:0.08520303710387656 } , { r:0.6501951605833587,g:0.8601184410727873,b:0.012237486142649301 } , { r:0.7339435093791835,g:0.9231173193901501,b:0.6946691155447715 } , { r:0.9678967792070015,g:0.8944494290758549,b:0.7568514137305731 }],
    }]
  }),

  getters: {
    getById: (state) => (id) => {
      return state.all.find(item => item.id == id);
    }
  },

  actions: {

  },

  mutations: {
    setColor(state, payload) {
      let id = payload.id - 1;
      let ledId = payload.ledId;
      let color = payload.color;

      Vue.set(state.all[id].data, ledId, color);
    }
  }
};
