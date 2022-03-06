# threejs-blender-lowpoly
Udemyを参考にBlenderで作ったglTFファイルをthree.jsで表示する

https://user-images.githubusercontent.com/16290220/156925001-de666f4f-5f40-4f91-a67b-668216394176.mov


## メモ
- ファイルは `glTF` ではなく、 `glb` にした
  - 前者でもできるけど、viteでビルドすると読み込まれているファイルしかコピーされないので、 `.bin` ファイルが持っていけず解決が面倒そうだったので `glb`　にした
- `GLTFLoader` で読み込んでシーンに追加するだけ
- 色味とか影を落としたりはもうちょっとライトを勉強しないとうまくいかなそう（やってみたけどイマイチわからなかった）
