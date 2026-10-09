export type ProductCatalogGroup = {
  title: string;
  prefix: string;
  ids: string[];
};

// Las medidas y presentaciones de cada familia aparecen juntas en una ficha.
const productCatalogGroups: ProductCatalogGroup[] = [
  { title: "Foco brillante LED", prefix: "Foco Brillante De", ids: ["lum-006", "lum-007", "lum-008"] },
  { title: "Foco UFO LED", prefix: "Foco UFO De", ids: ["lum-009", "lum-010"] },
  { title: "Fluorescente LED", prefix: "Fluorecente LED De", ids: ["lum-011", "lum-012", "lum-013"] },
  { title: "Dicroico LED 3T", prefix: "Dicroico", ids: ["lum-014", "lum-017"] },
  { title: "Foco bombillo LED", prefix: "Foco Bombillo LED", ids: ["lum-018", "lum-019"] },
  { title: "Foco botella LED", prefix: "Foco Botella LED", ids: ["lum-020", "lum-021", "lum-022"] },
  { title: "Bombillo LED con sensor", prefix: "Foco Bombillo Con Sensor", ids: ["lum-023", "lum-024"] },
  { title: "Cinta LED 220V 240D 10M", prefix: "Cinta LED 220V 240D 10M", ids: ["lum-075", "lum-076", "lum-077"] },
  { title: "Cinta LED 12V 240 LED 5M", prefix: "Cinta LED 12V 240 LED 5M", ids: ["lum-079", "lum-080", "lum-081"] },
  { title: "Cinta LED 220V 120D 10M", prefix: "Cinta LED 220V 120D 10M", ids: ["lum-087", "lum-088", "lum-089"] },
  { title: "Cinta Pixel Fluido 24V", prefix: "Cinta Pixel Fluido 24V", ids: ["lum-082", "lum-083", "lum-084"] },
  { title: "Transformador Slim 12V", prefix: "Transformador Slim 12V", ids: ["lum-035", "lum-036", "lum-037", "lum-038", "lum-039"] },
  { title: "Transformador lápiz", prefix: "Transformador Lapiz", ids: ["lum-040", "lum-041", "lum-042"] },
  { title: "Transformador Slim Supply 24V", prefix: "Transformador Slim Supply 24V", ids: ["lum-043", "lum-044", "lum-045", "lum-046"] },
  { title: "Transformador caja blanca 12V", prefix: "Transformador Cajta Blanco 12V", ids: ["lum-047", "lum-048", "lum-049"] },
  { title: "Reflector Lobo plateado", prefix: "Reflector Lobo Plateado", ids: ["lum-057", "lum-058", "lum-059"] },
  { title: "Reflector Lobo Nieve", prefix: "Reflector Lobo Nieve", ids: ["lum-060", "lum-061", "lum-062", "lum-063"] },
  { title: "Panel de poste Yaoyang", prefix: "Panel De Poste Yaoyang", ids: ["lum-065", "lum-066", "lum-067", "lum-068"] },
  { title: "Panel de poste Boeing", prefix: "Panel De Poste Boeing", ids: ["lum-069", "lum-070", "lum-071"] },
  { title: "Plafón redondo LED 3T", prefix: "Plafon Redondo LED", ids: ["lum-103", "lum-104", "lum-105", "lum-106"] },
  { title: "Tirador dedo", prefix: "Tirador Dedo", ids: ["fer-006", "fer-007", "fer-008", "fer-009", "fer-010", "fer-011"] },
  { title: "Tirador de tina", prefix: "Tirador De Tina", ids: ["fer-012", "fer-013", "fer-014"] },
  { title: "Pistón de gas", prefix: "Pistón Gas", ids: ["fer-035", "fer-036", "fer-037", "fer-038", "fer-039"] },
  { title: "Cinta de embalaje", prefix: "Cinta Embalaje", ids: ["fer-041", "fer-042"] },
  { title: "Tornillo para madera", prefix: "Tornillo Madera", ids: ["fer-044", "fer-045", "fer-046", "fer-047", "fer-048", "fer-049", "fer-050", "fer-051", "fer-052", "fer-053"] },
  { title: "Clavos", prefix: "Clavo", ids: ["fer-059", "fer-060", "fer-061", "fer-062", "fer-063", "fer-065", "fer-066", "fer-069"] },
  { title: "Bisagra de cierre lento", prefix: "Bisagra Cierre Lento", ids: ["fer-076", "fer-077"] },
  { title: "Cintillo de nylon", prefix: "Cintillo", ids: ["fer-086", "fer-087", "fer-088", "fer-089", "fer-090", "fer-091", "fer-092", "fer-093", "fer-094", "fer-095", "fer-096", "fer-097", "fer-098", "fer-099", "fer-100", "fer-101", "fer-102", "fer-103", "fer-104", "fer-105", "fer-106", "fer-107", "fer-108", "fer-109", "fer-110", "fer-111", "fer-112", "fer-113", "fer-114", "fer-115"] },
  { title: "Rodillo de pintura naranja", prefix: "Rodillo Pintura Naranja", ids: ["fer-117", "fer-118", "fer-119", "fer-120"] },
  { title: "Rodillo de pintura rayado", prefix: "Rodillo Pintura Rayado", ids: ["fer-121", "fer-122", "fer-123"] },
  { title: "Corredera normal pesada", prefix: "Corredera Normal Pesada", ids: ["fer-125", "fer-126", "fer-127", "fer-128", "fer-129", "fer-130", "fer-131"] },
  { title: "Corredera push-to-open", prefix: "Corredera Push-To-Open", ids: ["fer-132", "fer-133", "fer-134", "fer-135"] },
  { title: "Corredera de cierre lento", prefix: "Corredera Cierre Lento", ids: ["fer-136", "fer-137", "fer-138", "fer-139", "fer-140"] },
  { title: "Corredera liviana", prefix: "Corredera Liviana", ids: ["fer-141", "fer-142"] },
  { title: "Film plástico", prefix: "Film", ids: ["fer-162", "fer-163", "fer-164", "fer-165", "fer-166", "fer-167"] },
  { title: "Rejilla de ventilación de aluminio", prefix: "", ids: ["fer-169", "fer-170", "fer-171", "fer-172", "fer-173", "fer-174", "fer-175", "fer-176", "fer-177", "fer-178", "fer-179", "fer-180", "fer-181", "fer-182", "fer-183", "fer-184", "fer-185", "fer-186", "fer-187", "fer-188", "fer-189", "fer-190", "fer-191", "fer-192", "fer-193", "fer-194", "fer-195", "fer-196", "fer-197", "fer-198", "fer-199", "fer-200", "fer-201", "fer-202"] },
  { title: "Cerrojo cromado manual", prefix: "Cerrojo Cromado Manual", ids: ["fer-151", "fer-152"] },
  { title: "Cerrojo resorte cromado", prefix: "Cerrojo Resorte Cromado", ids: ["fer-153", "fer-154", "fer-155"] },
  { title: "Bandeja de acero inoxidable 304", prefix: "", ids: ["fer-204", "fer-205", "fer-206"] },
];

export default productCatalogGroups;
