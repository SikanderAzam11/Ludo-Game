const Red = (props) => {
    return <>
     <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.RedGeti001.geometry}
        material={props.model.materials.Roof}
        position={[-12.44, 2.54, -6.02]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.RedGeti2001.geometry}
        material={props.model.materials.Roof}
        position={[-11.05, 2.54, -6.02]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.RedGeti3001.geometry}
        material={props.model.materials.Roof}
        position={[-9.67, 2.54, -6.02]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.RedGeti4001.geometry}
        material={props.model.materials.Roof}
        position={[-8.29, 2.54, -6.02]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
    </>
}
export default Red;