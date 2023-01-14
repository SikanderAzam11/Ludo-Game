const Green = (props) => {
    return <>
     <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.GreenGeti2001.geometry}
        material={props.model.materials.Gras}
        position={[-10.69, 2.54, 6.46]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.GreenGeti4001.geometry}
        material={props.model.materials.Gras}
        position={[-7.93, 2.54, 6.46]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.GreenGeti3001.geometry}
        material={props.model.materials.Gras}
        position={[-9.31, 2.54, 6.46]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.GreenGeti001.geometry}
        material={props.model.materials.Gras}
        position={[-12.07, 2.54, 6.46]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      </>
}
export default Green;