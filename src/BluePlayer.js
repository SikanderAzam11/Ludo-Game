const BluePlayer = (props) => {
    return <>
    <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.BlueGeti001.geometry}
        material={props.model.materials.blue}
        position={[7.27, 2.54, 6.09]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.BlueGeti2001.geometry}
        material={props.model.materials.blue}
        position={[8.65, 2.54, 6.09]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.BlueGeti3001.geometry}
        material={props.model.materials.blue}
        position={[10.03, 2.54, 6.09]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
    </>
}
export default BluePlayer;